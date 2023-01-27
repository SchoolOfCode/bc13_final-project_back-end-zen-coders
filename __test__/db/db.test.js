// import mongoose from "mongoose-mock";
import mongoose from "mongoose";
import { mdbConnect } from "../../db/db.js";
// import config, {
//   testEnvironment,
//   coverageThreshold,
//   transform,
// } from "./jest.config";
require("dotenv").config({ path: __dirname + "/.env.test" });

jest.mock("mongoose", () => {
  return {
    connect: jest.fn().mockReturnValue(Promise.resolve()),
    set: jest.fn().mockReturnThis(),
    connection: {
      once: jest.fn(),
    },
  };
});

it('should log "mongdb is connected" and "MongoDB database connection established successfully" when it connects to the database successfully', async () => {
  const spy = jest.spyOn(console, "log");
  mongoose.connection.once.mockImplementation((event, cb) => {
    //event is coming from db.js line 16
    if (event === "open") {
      cb();
    }
  });
  await mdbConnect();
  expect(mongoose.connect).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(
    "MongoDB database connection established successfully"
  );
});
