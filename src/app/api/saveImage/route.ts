import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDB";

export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    
    const { binaryData } = await request.json();

    if (!currentUser) {
      return NextResponse.error();
    }
    if (!binaryData) {
      return NextResponse.json(
        { Message: "There is No Selected Image!" },
        { status: 400 }
      );
    }

    const existingImage = await prisma.userImage.findFirst({
      where: {
        userId: currentUser.id,
      },
    });

    if (existingImage) {
      // update the record in UserImage
      const updateImage = await prisma.userImage.update({
        where: {
          id: existingImage.id,
        },
        data: {
          image: binaryData,
        },
      });
      return NextResponse.json(updateImage);
    } else {
      //  create a new UserImage record
      const user = await prisma.userImage.create({
        data: {
          userId: currentUser.id,
          image: binaryData,
        },
      });

      return NextResponse.json(user);
    }
  } catch (error) {
    console.log("Error in Upload Image", error);
  }

}
