import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "./getCurrentUser";
import prisma from "@/lib/prismaDB";

export interface getEventDetailsByIDProps {
  id?: any;
}

export async function getEventDetailsByID(params: getEventDetailsByIDProps) {
  try {
    const { id } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser) return null;

    const eventDetails = await prisma.events.findUnique({ where: { id: id } });

    const getEventsImages = await prisma.eventImages.findFirst({
        where: {
            eventId: id,
        },
        select: {
            eventId: true,
            images: true,
        },
    })

    if(!eventDetails) return null

    const updatedEvents = {
        ...eventDetails,
        eventImages: getEventsImages
    }

    return updatedEvents

  } catch (error:any) {
    throw new Error(error)
  }
}
