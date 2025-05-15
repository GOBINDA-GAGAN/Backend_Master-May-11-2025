import express from "express";
const app = express();
import privateRouter from "./router/private.route.js";
import publicRouter from "./router/public.route.js";

const PORT = 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server start",
  });
});

app.use("/api/v1",publicRouter)
app.use("/api/v1",privateRouter)

app.listen(PORT, () => {
  console.log(" server start at", PORT);
});
