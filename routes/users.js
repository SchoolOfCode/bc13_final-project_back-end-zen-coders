import express from 'express';
const router = express.Router();

import User from '../models/users.module.js';

router.get('/', async (req, res) => {
  try {
    // mongoose method to get the list of all users from mdb,
    //find method returns a promise
    const result = await User.find(); //Same as SELECT * FROM
    res.json(result);
    //error handeling without restarting server
  } catch (error) {
    console.log(error);
    res.status(400).json('Error: ' + error);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const explore = await User.aggregate([
      {
        $lookup: {
          from: 'events',
          localField: '_id',
          foreignField: 'sharerId',
          as: 'UsersEvents',
        },
      },
    ]);
    res.json(explore)
  } catch (error) {
    console.log(error);
    res.status(400).json('Error: ' + error);
  }
});

router.post('/add', async (req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const profilePic = req.body.profilePic;
  const email = req.body.email;
  const isLearner = req.body.isLearner;
  const isSharer = req.body.isSharer;
  const aboutMe = req.body.aboutMe;
  const ratingId = req.body.ratingId; //post an empty array

  // "new" creates a new instance of an  object
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

  try {
    const result = await newUser.save(); //save method allows the new use to be saved in mdb
    res.json('User added!');
  } catch (error) {
    console.log(error);
    res.status(400).json('Error: ' + error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    //findbyid is a mongodb method
    const result = await User.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log('Error: ' + error);
    res.status(400).json('Error: ' + error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.json('user deleted');
  } catch (error) {
    console.log('Error: ' + error);
    res.status(400).json('Error: ' + error);
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.location = req.body.location;
    user.profilePic = req.body.profilePic;
    user.email = req.body.email;
    user.isLearner = req.body.isLearner;
    user.isSharer = req.body.isSharer;
    user.aboutMe = req.body.aboutMe;
    user.ratingId = req.body.ratingId;
    const result = await user.save();
    res.json('User updated!');
  } catch (error) {
    console.log('Error: ' + error);
    res.status(400).json('Error: ' + error);
  }
});

router.patch('/update/rating/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.ratings.push(req.body.ratingId);
    const result = await user.save();
    res.json('User updated!');
  } catch (error) {
    console.log('Error: ' + error);
    res.status(400).json('Error: ' + error);
  }
});

// db.student.update( { "subjects" : "gkn" },{ $push: { "achieve": 95 } });

export default router;
