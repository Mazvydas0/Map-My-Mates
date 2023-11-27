import { NextRequest , NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from '@/lib/prismaDB'


export async function POST(request : NextRequest){
    const body = await request.json();
    const {
        firstName,
        lastName,
        Nationality,
        dateOfBirth,
        address,
        email,
        password,
    } = body;

    if(!email){
        return NextResponse.json({"message" :"Please Enter email!"});
    }

    if(!firstName || !lastName || !Nationality || !dateOfBirth || !address || !email || !password ){
        return NextResponse.json({"message":"All fields are required!"});
    }

    // make a hashPassword to store in DB
    const hashPassword = await bcrypt.hash(password,12);

    // create User
    const user = await prisma.user.create({
        data :{
            firstName,
            lastName,
            Nationality,
            dateOfBirth,
            address,
            email,
            password : hashPassword,
        }
    });

    return NextResponse.json(user);
}