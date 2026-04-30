// @backend: cleanup pass-4: improved file organization
import mongoose from "mongoose";

const connectDB = async (db) => {
  try {
    const con = await mongoose.connect(db);
    console.log(`Database connected with ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
