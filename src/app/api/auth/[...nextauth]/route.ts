import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest } from "next/server";
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Phone",
      credentials: {
        phone: { label: "Phone Number", type: "tel" },
        code: { label: "Verification Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.code) return null;

        try {
          // Here you would verify the OTP with your SMS service
          // For now, we'll accept any 6-digit code
          if (credentials.code.length === 6) {
            return {
              id: credentials.phone,
              phone: credentials.phone,
              provider: "phone",
            };
          }
          return null;
        } catch  {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (user) {
        token.provider = account?.provider || user.provider;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.provider = token.provider;
        session.user.phone = token.phone;
      }
      return session;
    },
  },
};

export async function GET(req: NextRequest) {
  return NextAuth(authOptions)(req);
}

export async function POST(req: NextRequest) {
  return NextAuth(authOptions)(req);
}