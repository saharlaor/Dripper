const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_DB = process.env.MONGO_DB;

const URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.1hbae.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

//! If fails try taking out second option
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// module.exports.mongoClient = { client };
