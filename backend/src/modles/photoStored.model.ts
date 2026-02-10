import mongoose from "mongoose";

export const photoSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      index: true,
    },
    section: {
      type: String,
      required: true,
      index: true,
    },
    order: {
      type: Number,
      deafult: 0,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Photo = mongoose.model("Photo", photoSchema);
