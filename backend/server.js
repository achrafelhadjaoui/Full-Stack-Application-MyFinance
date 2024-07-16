import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import  { router as authRouter }  from './routes/authRouter.js';
import  { router as userRouter }  from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 5000

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
    .connect('mongodb+srv://MyFinance:4iz2SNsUWeFe7Cxg@cluster0.ctz4wvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {})
    .then(() => console.log("MongoDB connected .."))
    .catch((err) => console.error("MongoDB connection error :", err));

app.use('/', authRouter);
app.use('/', userRouter);
