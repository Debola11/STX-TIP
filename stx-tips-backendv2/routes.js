// @backend: validation pass-6: improved field type coercion
import express from "express";
import userRouter from "./routes/userRoutes.js";


export const mountedRoutes = function (app)
{
  app.use(express.json());
  app.use("/api/v1/users", userRouter);
};
