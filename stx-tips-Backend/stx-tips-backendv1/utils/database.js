import mongoose from "mongoose";

const connectDB = async (db) => {
  try {
    const con = await mongoose.connect(db);
    console.log(`Database connected 