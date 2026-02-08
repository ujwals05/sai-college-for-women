import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export default connectDB;