import express from "express";
import { generatedToken } from "../utils/token.js";
const router = express.Router();


router.get("/generate-token", (req, res) => {
  const Access_token = generatedToken();
  res.status(201).send({
    message: "token generated, please save it for feature use",
    token: Access_token,
  });
});
router.get("/home", (req, res) => {
  res.status(201).send({
    message: "welcome to home page 🏡",
  });
});

export default router;
