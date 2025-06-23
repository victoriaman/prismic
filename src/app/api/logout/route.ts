import { CONSTANT } from "@/lib/constant";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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
