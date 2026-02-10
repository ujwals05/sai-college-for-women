import type { Request, Response } from "express";
import fs from "fs";
import path from "path";
import cloudinary from "../config/cloudinary.js";
import { Photo } from "../modles/photoStored.model.js";

export const uploadPhoto = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { page, section, order, altText } = req.body;

    // 1. Write buffer to temp file
    const tempPath = path.join(
      process.cwd(),
      `temp-${Date.now()}-${req.file.originalname}`,
    );

    fs.writeFileSync(tempPath, req.file.buffer);

    // 2. Upload to Cloudinary
    const result = await cloudinary.uploader.upload(tempPath, {
      folder: `website/${page}/${section}`,
    });

    // 3. Remove temp file
    fs.unlinkSync(tempPath);

    // 4. Save metadata to DB
    const photo = await Photo.create({
      page,
      section,
      order: Number(order) || 0,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id,
      altText,
    });

    res.status(201).json(photo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};
