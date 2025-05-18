// app.js or index.js
import express from "express";
import userRouter from "./userRoutes.js"; // adjust the path if needed

const app = express();
const Port = 5000;

app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

// Mount user routes under /api/v1/users
app.use("/api/v1/users", userRouter);

app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});
