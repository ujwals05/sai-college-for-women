import { Router } from "express";
import { sampleController } from "../controllers/sample.controller.js";

const sampleRoute = Router();

sampleRoute.route("/sampleData").get(sampleController);

export { sampleRoute };
