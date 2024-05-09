import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route.js';
import mongoose from 'mongoose';
import { User } from '../../models/User.js';

export async function PUT(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const { email } = session?.user;

    if ('name' in data) {
      await User.updateOne({ email }, { name: data.name });
      return Response.json(true);
    } else {
      return Response.json({ error: 'Name field missing' });
    }
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Internal Server Error' });
  }
}
