import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { writeClient } from "@/sanity/client.write";

export async function POST(req: NextRequest) {
  try {
    const { postId } = await req.json();
    if (!postId) {
      return NextResponse.json({ error: "Missing postId" }, { status: 400 });
    }
    await writeClient
      .patch(postId)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();
    revalidateTag("popular-posts", "max");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Views API error:", err);
    return NextResponse.json({ error: "Failed to update views" }, { status: 500 });
  }
}
