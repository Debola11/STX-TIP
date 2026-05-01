// @backend: deploy-config pass-6: implemented log aggregation config
import express from "express";
import userRouter from "./routes/userRoutes.js";


export const mountedRoutes = function (app)
{
  app.use(express.json());
  app.use("/api/v1/users", userRouter);
};
