import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, phone, email, city, password } = body;
  const errors: String[] = [];

  const prisma = new PrismaClient();

  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 1, max: 20 }),
      error: "First Name is invalid",
    },
    {
      valid: validator.isLength(lastName, { min: 1, max: 20 }),
      error: "Last Name is invalid",
    },
    {
      valid: validator.isEmail(email),
      error: "Email is invalid",
    },
    {
      valid: validator.isLength(phone, { min: 1 }),
      error: "Mobile Number is invalid",
    },
    {
      valid: validator.isLength(city, { min: 1 }),
      error: "City is invalid",
    },
    {
      valid: validator.isLength(password, { min: 5 }),
      error: "Password is invalid",
    },
  ];

  validationSchema.map((check) => {
    if (!check.valid) errors.push(check.error);
  });

  if (errors.length)
    return NextResponse.json({ msg: errors[0] }, { status: 400 });

  const alreadyUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (alreadyUser)
    return NextResponse.json({ msg: "Email already exists" }, { status: 400 });

  const hashPass = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      password: hashPass,
      city,
      phone,
      email,
    },
  });

  return NextResponse.json({ user, msg: "User has been created" });
}
