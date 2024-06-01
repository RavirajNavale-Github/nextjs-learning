import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description, content } = await req.json();
  await connectMongoDB();

  await Blog.create({ title, description, content });
  return NextResponse.json({ message: "Blog Created" });
}

export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
}