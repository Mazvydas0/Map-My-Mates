import prisma from "@/lib/prismaDB";
import getCurrentUser from "./getCurrentUser";

export default async function getProfileImage() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const profileImage = await prisma.userImage.findFirst({
      where: {
        userId: currentUser.id,
      },
    });

    return profileImage;
  } catch (error: any) {
    throw new Error(error);
  }
}
