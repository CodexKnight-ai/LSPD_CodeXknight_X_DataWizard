// app.js

import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import Userrouter from './routes/users.route.js';

dotenv.config({
    path: './env'
});

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Connect to MongoDB
connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("MONGO DB connection failed !!!!!!", err);
});

// Routes
app.use("/api/v1/users", Userrouter);

export default app;
