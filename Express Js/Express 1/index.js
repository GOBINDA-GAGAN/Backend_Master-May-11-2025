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

//Query
app.get("/api/v1/users", (req, res) => {
  const { name } = req.query;
  console.log("Query Params:", name);
  if (name) {
    const user = User.filter(
      (user) =>
        user.name.replace(/\s/g, "").toLowerCase() === name.toLowerCase()
    );

    if (user.length === 0) {
      return res.status(404).send("User not found");
    }
  }

  return res.status(200).send(User);
});

// Params
app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  console.log("id:", id);

  const userId = parseInt(id);
  if (userId) {
    const user = User.find((user) => user.id === userId);

    return res.status(200).send(user);
  }

  return res.status(200).send(User);
});

app.listen(Port, () => {
  console.log("server Start");
});
