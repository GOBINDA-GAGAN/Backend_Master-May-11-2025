import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const Port = 5000;

// Add a secret for signed cookies
app.use(cookieParser("1234569ikmnbvcasdfg")); // <--- secret added here
app.use(express.json());
-
// Set a signed cookie at /cookies
app.get("/cookies", (req, res) => {
  res.cookie("userId", "45", {
    maxAge: 1000 * 30,
    httpOnly: true,
    signed: true, // signed is OK now because secret is provided
  });
  res.status(200).json({ message: "Cookie set" });
});

// Access product route
app.get("/product", (req, res) => {
  console.log("Signed Cookies:", req.signedCookies); // use signedCookies here

  if (req.signedCookies.userId === "45") {
    return res.status(200).json({
      id: 1,
      name: "Product-1",
      price: "$400",
      color: "red",
    });
  }

  return res.status(403).send("You are not authorized");
});

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.listen(Port, () => {
  console.log(`✅ Server running on http://localhost:${Port}`);
});
