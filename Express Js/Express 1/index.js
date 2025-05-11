import express from "express";

const app = express();

const Port = 5000;

app.get("/", (req, res) => {
  res.send(`<h1> hello Backend</h1>`);
});

app.listen(Port, () => {
  console.log("server Start");
});
