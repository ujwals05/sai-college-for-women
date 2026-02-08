import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is running on port number ${process.env.PORT}`)
    })
})

