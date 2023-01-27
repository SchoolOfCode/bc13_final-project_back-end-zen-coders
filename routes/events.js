import express from "express";
const router = express.Router();

import cloudinary from "../utils/cloudinary.js";
import multer from "../utils/multer.js";

import Event from "../models/events.module.js";

router.get("/", async (req, res) => {
  try {
    // mongoose method to get the list of all users from mdb,
    //find method returns a promise
    const result = await Event.find(); //Same as SELECT * FROM
    res.json({payload:result});
    //error handeling without restarting server
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.get("/explore", async (req, res) => {
  try {
    const explore = await Event.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "sharerId",
          foreignField: "_id",
          as: "sharerName",
        },
      },
    ]);
    res.json(explore);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.get("/explore/skill", async (req, res) => {
  try {
    const pipeline = [
      { $match: { skill: req.query.skill } },
      {
        $lookup: {
          from: "users",
          localField: "sharerId",
          foreignField: "_id",
          as: "sharerName",
        },
      },
      { $sort: { createdAt: -1 } },
    ];
    const result = await Event.aggregate(pipeline);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     //findOne is a mongodb method
//     const result = await Event.findOne({ skill: req.query.skill });
//     res.json(result);
//   } catch (error) {
//     console.log('Error: ' + error);
//     res.status(400).json('Error: ' + error);
//   }
// });

router.post("/add", multer.single("eventPic"), async (req, res) => {
  const title = req.body.title;
  const skill = req.body.skill;
  const location = req.body.location;
  const area = req.body.area;
  const description = req.body.description;
  const startTime = req.body.startTime;
  const sharerId = req.body.sharerId;
  const eventPic = req.file.path;

  // "new" creates a new instance of an  object

  try {
    const resultImage = await cloudinary.uploader.upload(req.file.path);
    const eventPic = resultImage.secure_url;
    const newEvent = new Event({
      title,
      skill,
      location,
      area,
      description,
      startTime,
      sharerId,
      eventPic,
    });
    const result = await newEvent.save(); //save method allows the new use to be saved in mdb
    res.json("Event added!");
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    //findbyid is a mongodb method
    const result = await Event.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Event.findByIdAndDelete(req.params.id);
    res.json("Event deleted");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});

router.patch("/update/:id", multer.single("eventPic"), async (req, res) => {
  try {
    const resultImage = await cloudinary.uploader.upload(req.file.path);
    const event = await Event.findById(req.params.id);
    event.title = req.body.title;
    event.skill = req.body.skill;
    event.location = req.body.location;
    event.area = req.body.area;
    event.description = req.body.description;
    event.startTime = req.body.startTime;
    event.sharerId = req.body.sharerId;
    event.eventPic = resultImage.secure_url;
    const result = await event.save();
    res.json("Event updated!");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json("Error: " + error);
  }
});
export default router;
