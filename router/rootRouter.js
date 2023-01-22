const express = require("express");

const router = express.Router();

router.get("/posts/:postId/:anotherId", (req, res, next) => {
  const { postId, anotherId } = req.params;
  console.log(typeof postId, typeof anotherId);

  //   res.statusMessage = "castomm status";
  //   res.status(204).end("Hello from router");
  res.json({ name: "Roman" });
});

router.post("/posts", (req, res, next) => {
  try {
    throw new Error("abra-cadabra");
  } catch (error) {
    next(error);
  }
});

module.exports = { router };
