import prisma from "@/lip/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        console.log(data)
        const result = await prisma.post.create({
            data: { desc: data.desc, userId: data.userId }
        })
        console.log(result)
        return NextResponse.json({ message: "post create", result })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}