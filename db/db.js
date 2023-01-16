//import mongoose library to nodejs
import mongoose from "mongoose";

export const mdbConnect = async () => {
  mongoose.set("strictQuery", false);

  //connection string from mongodb
  const uri = process.env.ATLAS_URI;

  //connection command
  mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};
//this is a comment