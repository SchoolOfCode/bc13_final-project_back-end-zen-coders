import express from "express";
import morgan from "morgan";
import cors from "cors";
import { mdbConnect } from "./db/db.js";

import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(morgan("dev"));

mdbConnect();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
