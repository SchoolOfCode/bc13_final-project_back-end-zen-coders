import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      minlength: 3,
    },
    location: { type: String, required: true, trim: true, minlength: 3 },
    profilePic: { type: String, required: false, trim: true, minlength: 3 },
    email: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    isLearner: {
      type: Boolean,
      default: false,
      required: true, //required
      trim: true, //removes white spaces
    },
    isSharer: {
      type: Boolean,
      default: true,
      required: true,
      trim: true,
    },
    aboutMe: {
      type: String,
      required: false,
      trim: true,
      maxlength: 1500,
    },
    // ratingId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Rating",
    // },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

export default User;
