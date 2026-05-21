import express from "express";
import userRouter from "./routes/userRoutes.js";


export const mountedRoutes = function (app)
{
  app.use(express.json());
 