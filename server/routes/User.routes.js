// Imports
const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  createUser,
} = require("../controllers/User.controllers");

// GET
router.get("/", getUsers);
router.get("/:authId", getUser);

// POST
router.post("/", createUser);

module.exports = router;
