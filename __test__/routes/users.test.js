// const request = require("supertest");
// import express from "express";
// import usersRouter from "../../routes/users.js";
// import { mdbConnect } from "../../db/db.js";

// require("dotenv").config({ path: __dirname + "/.env.test" });

// jest.mock("mongoose", () => {
//   return {
//     connect: jest.fn().mockReturnValue(Promise.resolve()),
//     set: jest.fn().mockReturnThis(),
//     connection: {
//       once: jest.fn(),
//     },
//   };
// });

// jest.setTimeout(10000);

// mdbConnect();

// const app = express();
// app.use(express.json());
// app.use("/users", usersRouter);
// let server;

// beforeAll((done) => {
//   server = app.listen(3004, done);
// });
// describe("Test the add user endpoint", () => {
//   test("It should create a new user", async () => {
//     // Define the user data to be sent in the request body
//     const userData = {
//       name: "Test Test",
//       location: "Test Test",
//       profilePic: "https://test.com/profilepic.jpg",
//       email: "test@mail.com",
//       isLearner: true,
//       isSharer: false,
//       aboutMe: "I am a software developer",
//       ratingId: [5],
//     };

//     // Make a POST request to the /add endpoint with the user data
//     const response = await request(app)
//       .post("/users/add")
//       .set("Accept", "application/json")
//       .send(userData);

//     // Assert that the response status is 201
//     expect(response.statusCode).toBe(201);
//     // Assert that the response body is "User added!"
//     expect(response.text).toBe("User added!");
//   });
// });

// afterAll((done) => {
//   server.close(done);
// });
