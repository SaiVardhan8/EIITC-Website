import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

// For server-side rendering, we'll use a dynamic approach
const getTemplateContent = async (templateName: string): Promise<string> => {
  try {
    // Only run on server-side
    if (typeof window === 'undefined') {
      const templatePath = path.join(
        process.cwd(),
        'lib',
        'emailTemplates',
        `${templateName}.hbs`
      );
      return await fs.readFile(templatePath, 'utf8');
    }
    return '';
  } catch (error) {
    console.error(`Failed to load template ${templateName}:`, error);
    throw error;
  }
};

/**
 * Renders an email template using handlebars
 * @param templateName - The template file name without extension
 * @param data - Data to pass to the template
 * @returns Compiled HTML string
 */
export async function renderEmailTemplate(
  templateName: string,
  data: Record<string, any>
): Promise<string> {
  try {
    // Get template content
    const templateSource = await getTemplateContent(templateName);
    
    // Compile the template
    const template = handlebars.compile(templateSource);
    
    // Process message text to HTML with line breaks
    if (data.message) {
      data.messageHtml = data.message.replace(/\n/g, '<br>');
    }
    
    // Add current year for copyright
    data.currentYear = new Date().getFullYear();
    
    // Format timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    }
    
    // Return the compiled HTML
    return template(data);
  } catch (error) {
    console.error('Error rendering email template:', error);
    throw error;
  }
}

/**
 * Sends an email using nodemailer
 * @param options - Email sending options
 * @returns Promise resolving to the send information
 */
export async function sendEmail({
  to,
  subject,
  html,
  text
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<any> {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Edvenswa Team" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject,
    html,
    text,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'X-Priority': '1'
    }
  });
  
  return info;
}
