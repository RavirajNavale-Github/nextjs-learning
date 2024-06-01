import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  // console.log("id",id);
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog });
}
