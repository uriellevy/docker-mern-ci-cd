import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan';
import chalk from 'chalk';
import { connectDB } from "./config/db";
import {user, card} from "./routes";
import { AppError } from "./exceptions/appError";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api/users",user);
app.use("/api/cards",card);

// Handle unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(chalk.blue.bgBlue.bold(`Server is running on  http://localhost:${PORT}`));
});

connectDB();