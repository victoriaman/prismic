import { CONSTANT } from "@/lib/constant";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  /* how to get cookie from header of Server Component */
  const cookieStore = await cookies();
  console.log("Cookies before logout:", cookieStore.getAll());

  const url = request.nextUrl.clone();
  url.pathname = "/login"; // Set redirect target

  const response = NextResponse.redirect(url);
  console.log("Logging out...");



  response.cookies.set(CONSTANT.AUTHENTICATION_COOKIE_NAME, "", {
    path: "/",
    expires: new Date(0), // Expire immediately
  });

  return response;
}
