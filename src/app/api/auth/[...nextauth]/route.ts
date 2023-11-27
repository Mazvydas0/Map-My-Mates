import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import prisma from "@/lib/prismaDB";
import bcrypt from "bcrypt";
import CredentialProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        // Find user in db through email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        // if user did't exist and hashPassword is not found then throw new Error
        if (!user || !user?.password) {
          throw new Error("Invalid Credentials");
        }

        // checking password through bcrypt compare
        const isCorrectPassword = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid Credentials");
        }

        // if email and password matched then user will be returned
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
