import { NextResponse } from 'next/server';
import { NextRequestWithAuth} from 'next-auth/middleware';

export function middleware(request: NextRequestWithAuth) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for NextAuth.js authentication routes
  if (pathname.startsWith('/api/auth/')) {
    return NextResponse.next();
  }
  
  // Check authentication status and route types
  const isLoggedIn = request.cookies.get('next-auth.session-token');
  const isAdminRoute = pathname.startsWith('/admin');
  const isAPIRoute = pathname.startsWith('/api');

  // Handle authentication for admin routes
  if (isAdminRoute) {
    if (!isLoggedIn) {
      // Store the original URL to redirect back after login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Optional: Check for admin role if you have role-based auth
    // const userRole = request.nextauth?.token?.role;
  /*  if (userRole !== 'admin') {
      return new NextResponse(
        JSON.stringify({ error: 'Insufficient permissions' }),
        { 
          status: 403,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } */



  }

  // Handle API route authentication
  if (isAPIRoute) {


   /* if (!isLoggedIn) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Unauthorized',
          message: 'Authentication required'
        }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Bearer'
          }
        }
      );
    } */

    // Validate token if needed
    try {
    //  const token = request.nextauth?.token;

      //console.log('TOKEN',token );

     /* if (!token) {
        throw new Error('Invalid token');
      } */
      
      // Add any additional token validation here
      
    } catch (error) {
     /* return new NextResponse(
        JSON.stringify({ 
          error: 'Invalid token',
          message: 'Please log in again'
        }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Bearer'
          }
        }
      ); */
      console.log(error);
    }
  }

  return NextResponse.next();
}

// Define protected routes with correct Next.js 15 matcher syntax
export const config = {
  matcher: [
    '/admin/:path*',
    '/api123/:path*',
    '/((?!api/auth).*)'
  ]
};