// Imports
const express = require("express");
const userRouter = require("./User.routes");
const drinkRouter = require("./Drink.routes");

const router = new express.Router();

router.use("/users", userRouter);
router.use("/drinks", drinkRouter);

module.exports = router;
