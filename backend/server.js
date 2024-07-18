import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import  { router as authRouter }  from './routes/authRouter.js';
import  { router as userRouter }  from './routes/userRoutes.js';
import {routerCategorie} from './routes/categorieRouter.js'
import {router as transactionRouter} from './routes/transactionRouter.js'

const app = express();
dotenv.config()
const port = process.env.PORT || 5000
const connectionString = process.env.MONGODB_CONNECTION_STRING;

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Adjust to your React app's URL
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

mongoose
    .connect(connectionString)
    .then(() => console.log("MongoDB connected .."))
    .catch((err) => console.error("MongoDB connection error :", err));

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', routerCategorie);

// tranaction
app.use('/', transactionRouter)
