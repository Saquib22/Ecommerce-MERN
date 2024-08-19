import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors'

//configure the env
dotenv.config()

//database config
connectDB();
//Port creation
const PORT = process.env.PORT || 8080;


// rest object
const app = express();

//middle ware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);

app.get("/", (req,res)=>{ 
    res.send("<h1>Welcome to Ecommerce Using MERN</h1>")
})
app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.DEV_MODE} on ${PORT}`);
})
