import express from "express";
const router = express.Router();

// Route 1: GET /create-user
router.get("/create-user", (req, res) => {
  res.send("GET: Create user endpoint");
});

// Route 2: GET /all-users
router.get("/all-users", (req, res) => {
  res.send("GET: All users endpoint");
});

// Route 3: GET /user/:id
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`GET: User details for ID ${userId}`);
});

// Route 4: GET /user/:id/profile
router.get("/user/:id/profile", (req, res) => {
  const userId = req.params.id;
  res.send(`GET: Profile of user with ID ${userId}`);
});

// Export the router
export default router;
