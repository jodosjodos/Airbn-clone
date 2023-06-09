import bcrypt from "bcrypt";
import Prisma from "@/app/libs/PrismaDb";
import { NextResponse } from "next/server";
export async function POST(request: Request) {


  const body = await request.json();
  const { email, name, password } = body;
  

  const hashedPassword = await bcrypt.hash(password, 12);
 const user=await Prisma?.user.create({
    data:{
        name,
        hashedPassword,
        email
    }
 })
  return NextResponse.json(user);
}
