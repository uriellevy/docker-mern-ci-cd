import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan';
import chalk from 'chalk';
import { connectDB } from "./config/db";
import userRoutes from "./routes/user";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);

app.listen(PORT, () => {
  console.log(chalk.blue.bgBlue.bold(`Server is running on  http://localhost:${PORT}`));
});

connectDB();