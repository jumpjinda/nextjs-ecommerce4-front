import connectMongo from "@/utils/db";
import { NextResponse } from "next/server";
import User from "../models/User";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const newUser = new User(body);
  try {
    await connectMongo();
    await newUser.save();

    return new NextResponse(`${newUser} has been created`, { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
