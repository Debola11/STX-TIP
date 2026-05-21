import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import globalErrorHandler from "./errorHandlers/errorHandler.js";
import { mountedRoutes } from "./routes.js";


const app = express();


// SET Security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development')
{
    app.use(morgan("dev"));
}

// The body parse