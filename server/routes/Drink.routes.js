// Imports
const express = require("express");
const router = express.Router();
const {
  getDrink,
  getUserDrinks,
  createDrink,
} = require("../controllers/Drink.controllers");

// GET
router.get("/", getUserDrinks);
router.get("/:_id", getDrink);

// POST
router.post("/", createDrink);

module.exports = router;
