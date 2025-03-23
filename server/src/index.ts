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
// app.use(cors({origin: 'http://localhost:5173',credentials: true,}));//allow cookies
const allowedOrigins = [
  "http://localhost:5173",
  "https://docker-mern-ci-cd-client.vercel.app",
  "https://docker-mern-ci-cd.vercel.app", // Add backend domain too
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
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

export { app };// Export app for testing
connectDB();