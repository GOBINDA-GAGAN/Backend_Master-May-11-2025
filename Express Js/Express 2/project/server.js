import express from "express";
const app = express();
import privateRouter from "./router/private.route.js";
import publicRouter from "./router/public.route.js";

const PORT = 4000;

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server start",
  });
});

app.use("/api/v1/public",publicRouter)
app.use("/api/v1/private",privateRouter)

app.listen(PORT, () => {
  console.log(" server start at", PORT);
});
