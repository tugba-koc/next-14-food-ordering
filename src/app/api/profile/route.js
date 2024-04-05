import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route.js';
import mongoose from 'mongoose';

export async function PUT(req, res) {
  await mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
  const session = await getServerSession(authOptions);
  console.log('session > ', session);
  return Response.json({ message: 'Profile updated' });
}
