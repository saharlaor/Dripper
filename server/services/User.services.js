// Imports
const User = require("../models/User.models");

// GET
async function getDbUser(authId) {
  try {
    const user = await User.findOne({ authId });
    return user;
  } catch (err) {
    throw Error({ code: 500, message: "Error while fetching user from DB" });
  }
}

async function getDbUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw Error({ code: 500, message: "Error while fetching user from DB" });
  }
}

module.exports = { getDbUser, getDbUsers };