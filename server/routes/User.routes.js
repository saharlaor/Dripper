// Imports
const express = require("express");
const router = express.Router();
const { getUser, getUsers } = require("../controllers/User.controllers");

router.get("/", getUsers);
router.get("/:authId", getUser);

module.exports = router;
