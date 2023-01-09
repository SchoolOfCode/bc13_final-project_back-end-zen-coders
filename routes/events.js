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
    const newUser = new Event({
        title:
        skill: 
        location: 
        area: 
        description: 
        startTime: 
        sharerId
        eventPic

    });
  
    try {
      const result = await newUser.save(); //save method allows the new use to be saved in mdb
      res.json("User added!");
    } catch (error) {
      console.log(error);
      res.status(400).json("Error: " + error);
    }
  });
export default router;