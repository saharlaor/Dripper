// Imports
require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes/router");

// Constants
require("dotenv").config();
const PORT = process.env.PORT || 9000;
const PUBLIC_PATH = path.join(__dirname, "../client/build");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(PUBLIC_PATH));
app.use("/api", router);

// Fallback
app.get("*", (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
