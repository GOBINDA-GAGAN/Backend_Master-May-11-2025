import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(201).send({
    message: `welcome to dashboard ,hello ${req.user.name}`,
  });
});

export default router;
