import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import db from '@/lib/db';
import { AuthOptions } from 'next-auth';

interface CustomUser {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
  created_at: string;
  account_id: string;
  password?: string;
  status: string;
}

declare module 'next-auth' {
  interface User extends Omit<CustomUser, 'password'> {
    email: string;
    name: string;
  }
  interface Session {
    user: User;
    expires: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends Omit<CustomUser, 'password'> {
    iat: number;
    exp: number;
    jti: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await db('users')
            .where('email', credentials.email)
            .first();

          if (!user || !user.password) {
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) return null;

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
            is_active: user.is_active,
            created_at: user.created_at,
            account_id: user.account_id,
            status: user.status
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.is_active = user.is_active;
        token.created_at = user.created_at;
        token.account_id = user.account_id;
        token.status = user.status;
      }
      return {
        ...token,
        role: token.role || 'user',
        is_active: token.is_active || false,
        created_at: token.created_at || new Date().toISOString(),
        account_id: token.account_id || '',
        status: token.status || 'active'
      };
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.is_active = token.is_active;
        session.user.created_at = token.created_at;
        session.user.account_id = token.account_id;
        session.user.status = token.status;
      }
      return session;
    }
  }
};