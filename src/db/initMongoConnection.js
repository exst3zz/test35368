import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.MONGODB_USER;
const pwd = process.env.MONGODB_PASSWORD;
const url = process.env.MONGODB_URL;
const db = process.env.MONGODB_DB;

async function initDBConnection() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=cluster-1`,
    );

    console.log('Mongo connection successfully establish!');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { initDBConnection };
