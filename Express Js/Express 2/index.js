import express from "express";

import { User } from "./Data/User.js";
const app = express();

const Port = 5000;

const role = "admin";
// const role = "student";
const sayMiddleware = (req, res, next) => {
  if (role === "admin") {
    console.log("i am admin 👋");
    next();
  } else {
    console.log("you are not admin");
  }
};

// app.use(sayMiddleware);

app.use(express.json());
app.get("/", sayMiddleware, (req, res) => {
  res.status(200).json({
    massage: "Hello world",
  });
});

app.listen(Port, () => {
  console.log("server Start");
});

//1.global middleware
//2.specific route middleware
//inbuilt middleware
