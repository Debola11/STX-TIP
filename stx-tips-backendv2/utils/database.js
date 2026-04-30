// @backend: documentation pass-3: added usage examples in comments
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
