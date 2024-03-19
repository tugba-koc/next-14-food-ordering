import { User } from '../../models/User.js';
import mongoose from 'mongoose';

export async function POST(req, res) {
  const body = await req.json();
  await mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json({ message: createdUser });
}
