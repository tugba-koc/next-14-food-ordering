import { User } from '@/app/models/User';
import mongoose from 'mongoose';

export async function POST(req, res) {
  const body = req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json({ message: createdUser });
}
