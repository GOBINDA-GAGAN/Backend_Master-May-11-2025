import express from "express";

import { User } from "./Data/User.js";
const app = express();

app.use(express.json());

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

  if (!userId) {
    return res.status(400).send("Invalid user ID");
  }

  const user = User.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  return res.status(200).send(user);
});

// POST request

app.post("/api/v1/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: User.length + 1,
    name: name,
    email: email,
  };
  User.push(newUser);

  res.status(201).send({
    message: "user created successfully",
    user: newUser,
  });
});
// PUT -> All filled Update
app.put("/api/v1/users/:id", (req, res) => {
  console.log(req.body, req.params);
  const {
    body,
    params: { id },
  } = req;

  const userId = parseInt(id);
  const userIndex = User.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    res.status(400).send("user not found");
  }

  User[userIndex] = {
    id: userId,
    ...body,
  };
  //   User[userIndex] = {
  //   ...User[userIndex],
  //   ...body,
  // };
  res.status(201).send({
    message: "user update successfully",
    user: User[userIndex],
  });
});

// PATCH ->One field Update
app.patch("/api/v1/users/:id", (req, res) => {
  console.log(req.body, req.params);
  const {
    body,
    params: { id },
  } = req;

  const userId = parseInt(id);
  const userIndex = User.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    res.status(400).send("user not found");
  }

  User[userIndex] = {
    ...User[userIndex],
    ...body,
  };
  res.status(201).send({
    message: "user update successfully",
    user: User[userIndex],
  });
});
// DELETE -> DELETE  the user
app.delete("/api/v1/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const parseId= parseInt(id)
    console.log(id);
    

    const userIndex = User.findIndex((user) => user.id ===  parseId);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    User.splice(userIndex, 1);
    return res.status(200).send("User deleted successfully");
  } catch (error) {
    console.log(error.message); // fixed typo
    return res.status(500).send("Internal server error");
  }
});

app.listen(Port, () => {
  console.log("server Start");
});
