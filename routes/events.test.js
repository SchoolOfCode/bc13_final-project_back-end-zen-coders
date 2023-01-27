
// import app
import app from "../app.js";
// import supertest
import request from "supertest";
// import jest
import { test, expect } from "@jest/globals";

import mongoose from "mongoose";
//import dotenv here?  

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.ATLAS_URI);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

test("test to see if get route works", async () => {
	const response = await request(app).get("/events");
	//expect(response.status).toEqual(200);
	// expect(response.body).toEqual({
	// 	payload: expect.any(Array)
	// });
    //ince I wrote this, let's jsut see first? 
	// for (let i = 0; i < response.body.payload.length; i++) {
	// 	const resourceObject = response.body.payload[i];
	// 	expect(resourceObject).toEqual({
    //         title: expect.any(String),
    //         skill: expect.any(String),
    //         location: expect.any(String),//This could also be London I think as we only have London
    //         area: expect.any(String),
    //         description: expect.any(String),
    //         startTime:expect.any(String), 
    //         sharerId: expect.any(Object),
    //         eventPic: expect.any(String),
	// 	});
	// }
});


// test('test to see that the information is posted when typed', async ()=> {
// 	const author = 'Coach';
// 	const category = 'UX/UI';
// 	const difficulty= 1;
// 	const estimated_time= '< 30 mins';
// 	const format = 'Video';
// 	const link = 'https://www.youtube.com/watch?v=-yrnWnN0g9o';
// 	const title= 'React With Firebase';
//     //const created = {task: task, completionDate: completionDate}
//     const response = await  request(app)
//         .post("/api/resources")
//         .send({ author, category, difficulty, estimated_time, format, link, title });
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//         success: true,
//         payload: {
//              author: 'Coach',
// 			 category :'UX/UI',
// 	 		 difficulty: 1,
// 	 		 estimated_time:'< 30 mins',
// 	 		 format: 'Video',
// 			 id: expect.any(Number),
// 	 		 link:'https://www.youtube.com/watch?v=-yrnWnN0g9o',
// 			 title:'React With Firebase',
			
//         },
//     });
// })
