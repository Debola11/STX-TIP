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
