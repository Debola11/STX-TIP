import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import app from "./app.js";

// Handle uncaughtException
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

// Bring in the connection string
const DB_CLOUD = process.env.DB_CLOUD.replace(
  "<pass