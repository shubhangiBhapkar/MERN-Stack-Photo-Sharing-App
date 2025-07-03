import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import imageRoute from "./Routes/ImageRoutes.js";

//const port=4000;
const app=express();


app.use(morgan("dev"));
dotenv.config();
app.use(cors());

app.get("/",(req,res)=>{
    res.json("working");
})

app.use("/api",imageRoute);


app.listen(process.env.PORT,()=>{
    console.log(`serving on port ${process.env.PORT}`)
})