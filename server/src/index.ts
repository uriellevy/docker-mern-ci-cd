import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db";
import {user, recipe} from "./routes";
import { AppError } from "./exceptions/appError";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:5173',credentials: true,}));//allow cookies
app.use(express.json());
app.use(cookieParser());

app.use("/api/users",user);
app.use("/api/recipes",recipe);

// Handle unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(errorHandler);

app.listen(parseInt(PORT), '0.0.0.0',  () => {
  console.log(`Server is running on port:${PORT}`);
});

connectDB();