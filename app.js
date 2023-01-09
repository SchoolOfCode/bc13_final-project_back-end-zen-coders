import express from "express";
import morgan from "morgan";
import cors from "cors";
import { mdbConnect } from "./db/db.js";

import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(morgan("dev"));

mdbConnect();

app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
