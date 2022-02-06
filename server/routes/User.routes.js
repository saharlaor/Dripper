// Imports
const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  createUser,
  addUserDrink,
} = require("../controllers/User.controllers");

// GET
router.get("/", getUsers);
router.get("/:authId", getUser);

// POST
router.post("/", createUser);

// PUT
router.put("/:id", addUserDrink);

module.exports = router;
