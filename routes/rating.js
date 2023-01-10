import express from "express";
const router = express.Router();

import Rating from "../models/rating.module.js";

router.get("/", async (req, res) => {
  try {
    const result = await Rating.find();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error:" + error);
  }
});

router.post("/add", async (req, res) => {
  const rating = req.body.rating;
  const userId = req.body.userId;

  const newRating = new Rating({
    rating,
    userId,
  });

  try {
    const result = await newRating.save();
    res.json("Rating added!");
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Rating.findByIdAndDelete(req.params.id);
    res.json("rating deleted");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

export default router;
