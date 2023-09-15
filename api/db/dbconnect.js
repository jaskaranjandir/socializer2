import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function dbConnect() {
  const mongoURI = process.env.MONGODB_URI;
  return mongoose
    .connect(mongoURI, { dbName: "Socializer" })
    .then((result) => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));
}
