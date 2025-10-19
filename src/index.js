//require("dotenv").config({path: './env'});
import dotenv from "dotenv";

import app from "./app.js";
// import mongoose from "mongoose";
// import{ Db_name } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
    server.on("error", (error) => {
        console.log("Error connecting to MongoDB", error);
    })
})
.catch((error) => {
    console.log("DB connection failed", error);
    process.exit(1);
});















/*
import express from "express";
const app = express();
(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/{Db_name}`)
        app.on("error", (error) => {
            console.log("Error connecting to MongoDB", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
})()
*/

