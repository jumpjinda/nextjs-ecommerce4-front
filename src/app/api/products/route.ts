import connectMongo from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();
  console.log(user);

  return NextResponse.json(user);
}
