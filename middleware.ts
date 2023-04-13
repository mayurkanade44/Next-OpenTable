import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest, res: NextResponse) {
  console.log("middle");

  const bearerToken = req.headers.get("authorization") as string;

  if (!bearerToken)
    return NextResponse.json({ msg: "Invalid Token" }, { status: 401 });

  const token = bearerToken.split("/")[1];

  if (!token)
    return NextResponse.json({ msg: "Invalid Token2" }, { status: 401 });

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json({ msg: "Invalid Token 3" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
