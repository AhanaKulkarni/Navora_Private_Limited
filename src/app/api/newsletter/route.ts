import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;

    if (!email) {
      return NextResponse.redirect(new URL('/?error=invalid_email', req.url));
    }

    try {
      await prisma.subscriber.create({
        data: { email }
      });
    } catch (e) {
      // Unique constraint failed or sqlite failed
    }

    return NextResponse.redirect(new URL('/?success=subscribed', req.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/?error=server_error', req.url));
  }
}
