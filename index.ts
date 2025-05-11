// Libraries
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import express, { Request, Response } from "express";

// Models
import User from "./models/user";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ussd-app";

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.error("MongoDB connection error:", err));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the USSD App API!");
});

app.post("/", async (req: Request, res: Response) => {
  const { sessionId, phoneNumber, text } = req.body;
  const userInput = text.split("*");
  let response = "";

  try {
    if (text === "") {
      response = "CON Enter your name";
    } else if (userInput.length === 1) {
      response = "CON Enter your id number";
    } else if (userInput.length === 2) {
      const [name, idNumber] = userInput;
      if (!/^\d+$/.test(idNumber)) {
        response = "END Invalid ID number. Please enter a number.";
      } else {
        response = `CON Please confirm you want to save the following details:

        Name: ${name}
        ID Number: ${idNumber}

        1. Confirm
        2. Cancel
        3. View All Users`;
      }
    } else if (userInput.length === 3) {
      const [name, idNumber, confirmation] = userInput;

      if (confirmation === "1") {
        try {
          const newUser = new User({
            fullName: name,
            id_number: idNumber,
          });
          await newUser.save();
          response = "END Your details have been saved successfully!";
        } catch (err) {
          console.error("DB save error:", err);
          response =
            "END An error occurred while saving your details. Please try again.";
        }
      } else if (confirmation === "2") {
        response = "END Your details have not been saved. Thank you!";
      } else if (confirmation === "3") {
        try {
          const users = await User.find();
          if (users.length > 0) {
            response =
              "END Users:\n" +
              users
                .map((user) => `${user.fullName} - ${user.id_number}`)
                .join("\n");
          } else {
            response = "END No users found.";
          }
        } catch (err) {
          console.error("DB fetch error:", err);
          response =
            "END An error occurred while fetching users. Please try again.";
        }
      } else {
        response = "END Invalid selection. Please try again.";
      }
    } else {
      response = "END Invalid input. Please try again.";
    }
  } catch (err) {
    console.error("General error:", err);
    response = "END An unexpected error occurred.";
  }

  setTimeout(() => {
    console.log("User Input:", userInput);
    res.send(response);
    res.end();
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
