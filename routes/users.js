import express from "express";
const router = express.Router();

import cloudinary from "../utils/cloudinary.js";
import multer from "../utils/multer.js";

import { ObjectId } from 'mongoose'; 
import mongoose from "mongoose";


import convert from "heic-convert";
import sharp from "sharp";

import User from "../models/users.module.js";

router.get("/", async (req, res) => {
  try {
    // mongoose method to get the list of all users from mdb,
    //find method returns a promise
    const result = await User.find(); //Same as SELECT * FROM
    res.json(result);
    //error handeling without restarting server
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const explore = await User.aggregate([
      {
        $lookup: {
          from: "events",
          localField: "_id",
          foreignField: "sharerId",
          as: "UsersEvents",
        },
      },
    ]);
    res.json(explore);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});




router.get('/profile/:id', async (req, res) => {
  try {
    
    const pipeline = [
     { $match: { _id: mongoose.Types.ObjectId(req.params.id)} },
      {
        $lookup: {
          from: 'events',
          localField: '_id',
          foreignField: 'sharerId',
          as: 'UsersEvents'
        }
      },
    //  { $sort: { createdAt: -1 } },
    ];
    const result = await User.aggregate(pipeline)
    res.json(result)
  } catch (error) {
    console.log(error);
    res.status(400).json('Error: ' + error);
  }
});

router.post("/add", multer.single("profilePic"), async (req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const email = req.body.email;
  const isLearner = req.body.isLearner;
  const isSharer = req.body.isSharer;
  const aboutMe = req.body.aboutMe;
  const ratingId = req.body.ratingId;

  try {
    // Upload the image to Cloudinary
    const resultImage = await cloudinary.uploader.upload(req.file.path);
    // Get the secure URL of the uploaded image
    const profilePic = resultImage.secure_url;

    // Create a new user with the profilePic URL
    const newUser = new User({
      name,
      location,
      profilePic,
      email,
      isLearner,
      isSharer,
      aboutMe,
      ratingId,
    });

    // Save the new user to the database
    const result = await newUser.save();
    res.json("User added!");
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    //findbyid is a mongodb method
    const result = await User.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.json("user deleted");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

router.patch("/update/:id", multer.single("profilePic"), async (req, res) => {
  try {
    const resultImage = await cloudinary.uploader.upload(req.file.path);
    const user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.location = req.body.location;
    user.profilePic = resultImage.secure_url;
    user.email = req.body.email;
    user.isLearner = req.body.isLearner;
    user.isSharer = req.body.isSharer;
    user.aboutMe = req.body.aboutMe;
    user.ratings.ratingId = req.body.ratingId;
    const result = await user.save();
    res.json("User updated!");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

router.patch("/update/rating/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.ratings.push(req.body.ratingId);
    const result = await user.save();
    res.json("User updated!");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

// db.student.update( { "subjects" : "gkn" },{ $push: { "achieve": 95 } });

export default router;
