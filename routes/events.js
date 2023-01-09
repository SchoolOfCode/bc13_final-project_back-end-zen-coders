import express from "express";
const router = express.Router();

import Event from "../models/events.module.js";

router.get("/", async (req, res) => {
  try {
    // mongoose method to get the list of all users from mdb,
    //find method returns a promise
    const result = await Event.find(); //Same as SELECT * FROM
    res.json(result);
    //error handeling without restarting server
  } catch (error) {
    console.log(error);
    res.status(400).json("Error: " + error);
  }
});

router.post("/add", async (req, res) => {
    const title= req.body.title
    const skill = req.body.skill
    const location = req.body.location 
    const area = req.body.area
    const description = req.body.description
    const startTime = req.body.startTime
    const sharerId = req.body.sharerId
   const eventPic = req.body.eventPic
  
    // "new" creates a new instance of an  object
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
  
    try {
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

  router.patch("/update/:id", async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      event.title= req.body.title
      event.skill = req.body.skill
      event.location = req.body.location 
      event.area = req.body.area
      event.description = req.body.description
      event.startTime = req.body.startTime
      event.sharerId = req.body.sharerId
      event.eventPic = req.body.eventPic
      event.result = await user.save();
      res.json("Event updated!");
    } catch (error) {
      console.log("Error: " + error);
      res.status(400).json("Error: " + error);
    }
  });
export default router;