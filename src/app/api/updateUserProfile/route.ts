import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDB"

export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
        console.log("currentUser in updateUserProfile: ", currentUser);


    if (!currentUser) return new Response("Unauthorized", { status: 401 });

    const body = await request.json();

    const { firstName, lastName, Nationality, dateOfBirth, address, email } =
      body;

    // creating object with only those fields which exists in the request
    const updateData = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(Nationality && { Nationality }),
      ...(dateOfBirth && { dateOfBirth }),
      ...(address && { address }),
      ...(email && { email }),
    };

    // If there is no fields in request, return such response
    if (Object.keys(updateData).length === 0) {
      return new Response("No fields provided for update", { status: 400 });
    }

    // update user profile in DB
    const updateUserProfile = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: updateData,
    });

    return NextResponse.json(updateUserProfile)
  } catch (err) {}
}
