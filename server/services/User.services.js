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

// POST
async function createDbUser({ uid, name, email, photoUrl }) {
  try {
    const newUser = new User({
      uid,
      name,
      email,
      photoUrl,
      drinkHistory: [],
    });
    newUser.save((err, data) => {
      if (err) {
        throw Error({
          status: 400,
          message: `User ${req.params.id} alreadyExists`,
        });
      } else {
        return data;
      }
    });
  } catch ({ code, message }) {
    throw Error({
      code: code || 500,
      message: message || "Error while fetching user from DB",
    });
  }
}

module.exports = { getDbUser, getDbUsers, createDbUser };
