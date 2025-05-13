import express from "express";

import { User } from "./Data/User.js";
const app = express();


const Port = 5000;

const sayMiddleware = (req, res, next) => {
  console.log("i am Middleware 👋");
  next();
};

app.use(sayMiddleware);
app.use(express.json());
app.get("/", (req, res) => {
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
