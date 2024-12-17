import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];
const publicRoutes = [];
const authRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const cookie = cookies().get("access_token");

  const path = req.nextUrl.pathname;

  console.log("middleware", path);

  //TODO: uncomment this
  // if (!cookie && protectedRoutes.includes(path)) {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl));
  // }

  // if (cookie && authRoutes.includes(path)) {
  //   return NextResponse.redirect(new URL("/typing/practice", req.nextUrl));
  // }

  return NextResponse.next();
}
