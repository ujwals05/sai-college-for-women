import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/index.js";
// import { sampleRoute } from "./routers/sample.route.js";
import photoRoute from "./routers/photo.route.js";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/v1", sampleRoute);
app.use("/api/photo", photoRoute);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port number ${process.env.PORT}`);
  });
});
