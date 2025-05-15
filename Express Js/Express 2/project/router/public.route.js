import express from "express";
const router = express.Router();

router.get("/generate-token", (req, res) => {
  const Access_token = 12345678;
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
