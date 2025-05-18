
import express from "express";

const app = express();
const Port = 5000;

app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});



app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});
