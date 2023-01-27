import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    skill: { type: String, required: true },
    location: { type: String, required: true },
    area: { type: String, required: false },
    description: { type: String, required: true, maxLength: 6500 },
    startTime: { type: Date, default: Date.now, required: true },
    sharerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    eventPic: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Events", eventSchema);

export default Event;
