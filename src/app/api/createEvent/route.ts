import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismaDB";

export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    // check if currentUser exists
    if (!currentUser) return new Response("Unauthorized", { status: 401 });

    const body = await request.json();

    const {
      name,
      city,
      latitude,
      longitude,
      date,
      eventImage,
      detail,
      country,
    } = body;

    if (
      !name ||
      !city ||
      !latitude ||
      !longitude ||
      !date ||
      !eventImage ||
      !detail ||
      !country
    ) {
      return NextResponse.json(
        { message: "All Fields are Required!" },
        { status: 401 }
      );
    }

    // create Event
    const event = await prisma.events.create({
      data: {
        userId: currentUser.id,
        name: name,
        city: city,
        country: country,
        latitude: latitude,
        longitude: longitude,
        date: date,
        eventImage: eventImage,
        detail: detail,
      },
    });

    return NextResponse.json(event);
  } catch (error: any) {
    throw new Error(error);
  }
}
