import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismaDB";

export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return new Response("Unauthorized", { status: 401 });

    const body = await request.json();
    const { images, paramsId } = body;

    if (!images) {
      return NextResponse.json(
        { message: "Images are required" },
        { status: 401 }
      );
    }

    const event = await prisma.events.findUnique({
      where: {
        id: paramsId,
      },
      select: {
        userId: true,
        id: true,
      },
    });

    if (!event) {
      return new Response("Event is not available", { status: 401 });
    }

    // query to check for existing images
    const existingImages = await prisma.eventImages.findFirst({
      where: {
        eventId: event.id,
      },
      select: {
        images: true,
      },
    });

    // if images in the event exist, append new images
    if (existingImages) {
      const updatedImages = [...existingImages.images, ...images];
      await prisma.eventImages.update({
        where: {
          eventId: event.id,
        },
        data: {
          images: updatedImages,
        },
      });
    }else {
        // if there is no images found, create new record
        await prisma.eventImages.create({
            data: {
                eventId: event.id,
                images: images
            }
        })
    }

    return NextResponse.json({message: "Images saved successfully !"}, {status: 200})
  } catch (error) {
    console.log("save event images error: ", error);
    return NextResponse.error()
  }
}
