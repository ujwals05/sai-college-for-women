import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import { uploadPhoto } from "../controllers/photo.controller.js";
const photoRoute = Router();

photoRoute.route("/upload").post(upload.single("image"), uploadPhoto);

export default photoRoute;
