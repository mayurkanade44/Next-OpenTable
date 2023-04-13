import { NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
 
  return NextResponse.json({ msg: "ok" });
}
