import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, phone, email, city, password } = req.body;

  if (!firstName || !lastName || !phone || !city || !email || !password)
    return res.status(400).json({ msg: "Please provide all values" });

  return;
}
