import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import app from "./app.js";

// Handle uncaughtException
process.on("uncaughtException", (err) => {
  cons