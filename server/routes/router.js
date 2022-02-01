// Imports
const express = require("express");
const userRouter = require("./User.routes");

const router = new express.Router();

router.use("/users", userRouter);

module.exports = router;
