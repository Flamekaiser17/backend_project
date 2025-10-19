import mongoose from "mongoose";
import { Db_name } from "../constants.js";




const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`); 
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
}


export default connectDB;