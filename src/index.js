//require('dotenv').config({path:'/env'})

import dotenv from "dotenv"
import conncetDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

conncetDB()


/*
 //1st approach to DB connection

import  express from "express";
const app= express()

(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error :",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("Error :",error);
        throw err
    }
})()

*/