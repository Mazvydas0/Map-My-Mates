import { getServerSession } from "next-auth/next";
import { handler } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prismaDB";

// define a type for the session object
interface SessionType {
  user?: {
    email?: string;
  };
}

export async function getSession(): Promise<SessionType | null> {
  return await getServerSession(handler);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        Nationality: true,
        dateOfBirth: true,
        address: true,
        email: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    console.log("error getting current user: ", error);
  }
}
