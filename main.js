import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(cors());
app.use("/user", router);

dotenv.config({
  path: "./config.env",
});

const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
