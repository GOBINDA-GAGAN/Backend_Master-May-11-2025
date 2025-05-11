import express from "express";

import { User } from "./Data/User.js";
const app = express();

const Port = 5000;

// GET Fetch data from the server
app.get("/", (req, res) => {
  res.status(200).json({
    massage: "Hello world",
  });
  res.send(`<h1> Hello Backend</h1>`);
});

// Industry Stander 

app.get("/api/v1/users", (req, res) => {

  console.log(req.query);  // query parameter

  
  res.status(200).send(User);
});


app.listen(Port, () => {
  console.log("server Start");
});
