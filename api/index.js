import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbconnect.js";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  dbConnect();
  console.log("listening on port", port);
});
