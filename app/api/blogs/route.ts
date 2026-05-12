
import { NextRequest, NextResponse } from 'next/server';
import db from "@/lib/db";
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { Client } from 'minio';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as os from 'os';

// MinIO Configuration
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || "94.784.789.548:9090";
const MINIO_PORT = parseInt(process.env.MINIO_PORT || "9090");
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || "KJ9izWx3mVredtyKnn71";
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY || "8A6VU6BeMCD0k8RCFW75WEmS20LcCbWEFR3KhYrTV";
const MINIO_SECURE = process.env.MINIO_SECURE === 'true';
const MINIO_BUCKET_NAME = "website-blogs";

// Initialize MinIO client
const minioClient = new Client({
    endPoint: MINIO_ENDPOINT.split(':')[0],
    port: MINIO_PORT,
    useSSL: MINIO_SECURE,
    accessKey: MINIO_ACCESS_KEY,
    secretKey: MINIO_SECRET_KEY,
});

// Helper function to ensure bucket exists
async function ensureBucketExists(bucketName: string) {
    try {
        const exists = await minioClient.bucketExists(bucketName);
        if (!exists) {
            await minioClient.makeBucket(bucketName, 'us-east-1');
            console.log(`Bucket '${bucketName}' created successfully.`);
        } else {
            console.log(`Bucket '${bucketName}' already exists.`);
        }
    } catch (err) {
        console.error(`Error ensuring bucket '${bucketName}' exists:`, err);
        throw err;
    }
}

// GET - Fetch all blogs
export async function GET() {
    try {
        const blogs = await db('blogs_data')
            .select('id', 'slug', 'blog_title', 'blog_content', 'blog_image', 'blog_cateogry');

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {

        console.log('Entered POST request to /api/blogs');
        const formData = await request.formData();
        const blog_title = formData.get('blog_title') as string;
        const slug = formData.get("slug") as string;
        const blog_content = formData.get('blog_content') as string;
        const blog_cateogry = formData.get('blog_cateogry') as string;
        const imageFile = formData.get('image') as File | null;

        // Validation
        if (!blog_title || !blog_content || !blog_cateogry) {
            return NextResponse.json(
                { error: 'Missing required fields: blog_title, blog_content, and blog_cateogry are required' },
                { status: 400 }
            );
        }

        let imagePath = '';

        // Handle image upload if provided
        if (imageFile && imageFile.size > 0) {
            // Validate file type
            if (!imageFile.type.startsWith('image/')) {
                return NextResponse.json(
                    { error: 'Only image files are allowed' },
                    { status: 400 }
                );
            }

            // Validate file size (5MB limit)
            if (imageFile.size > 5 * 1024 * 1024) {
                return NextResponse.json(
                    { error: 'File size must be less than 5MB' },
                    { status: 400 }
                );
            }

            try {
                // Create unique filename
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const ext = path.extname(imageFile.name);
                const filename = `blog-${uniqueSuffix}${ext}`;

                // Create upload directory
                const uploadDir = path.join(process.cwd(), 'public', 'blog_images');
                await mkdir(uploadDir, { recursive: true });

                // Save file
                const bytes = await imageFile.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const filePath = path.join(uploadDir, filename);
                await writeFile(filePath, buffer);

                // Set image path for database
                imagePath = `/blog_images/${filename}`;

                let objectName: string | undefined;
                let tempFilePath: string | undefined;

                if (imageFile && imageFile.size > 0) {
                    const fileExtension = path.extname(imageFile.name);
                    objectName = `${uuidv4()}${fileExtension}`;

                    await ensureBucketExists(MINIO_BUCKET_NAME);

                    const bytes = await imageFile.arrayBuffer();
                    const buffer = Buffer.from(bytes);
                    tempFilePath = path.join(os.tmpdir(), objectName);
                    fs.writeFileSync(tempFilePath, buffer);

                    const fileStream = fs.createReadStream(tempFilePath);
                    await minioClient.putObject(MINIO_BUCKET_NAME, objectName, fileStream, imageFile.size, {
                        'Content-Type': imageFile.type,
                    });

                    imagePath = `${MINIO_SECURE ? 'https' : 'http'}://${MINIO_ENDPOINT}/${MINIO_BUCKET_NAME}/${objectName}`;
                }









            } catch (uploadError) {
                console.error('Error uploading image:', uploadError);
                return NextResponse.json(
                    { error: 'Failed to upload image' },
                    { status: 500 }
                );
            }
        }





        // Create new blog post with current date
        const newBlog = {
            blog_title: blog_title.trim(),
            slug: slug.trim(),
            blog_content: blog_content.trim(),
            blog_image: imagePath,
            blog_cateogry: blog_cateogry.trim(),
            created_at: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
        };

        const [insertedId] = await db('blogs_data').insert(newBlog).returning('id');

        // Fetch the newly created blog post
        const createdBlog = await db('blogs_data')
            .select('id', 'blog_title', 'slug', 'blog_content', 'blog_image', 'blog_cateogry', 'created_at')
            .where('id', insertedId.id || insertedId)
            .first();

        return NextResponse.json(createdBlog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog post:', error);
        return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
    }
}

