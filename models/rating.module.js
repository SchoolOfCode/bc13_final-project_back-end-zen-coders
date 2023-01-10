import mongoose, { SchemaType } from "mongoose";

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Ratings", ratingSchema);

export default Rating;
