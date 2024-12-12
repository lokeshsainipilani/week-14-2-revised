import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET(){
    return Response.json({
        email:"harkirat@gmail.com",
        name:"harkirat singh"
    })
}

export async function POST(req:NextRequest){

    const body = await req.json();
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })

    return Response.json({
        message:"you are logged in"
    })
}