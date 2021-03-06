// Imports
const User = require("../models/User.models");

// GET
async function getDbUser(uid) {
  try {
    const user = await User.findOne({ uid });
    return user;
  } catch (err) {
    console.log("err", err);
    throw { code: 500, message: "Error while fetching user from DB" };
  }
}

async function getDbUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw { code: 500, message: "Error while fetching user from DB" };
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
    await newUser.save();
  } catch (err) {
    throw {
      code: 500,
      message: "Error while creating user from DB",
    };
  }
}

// PUT
async function addDbUserDrink({ _id, drinkId }) {
  try {
    const user = await User.findOne({ _id });
    user.drinkHistory.push(drinkId);
    return user;
  } catch (err) {
    throw {
      code: 500,
      message: "Error while adding drink to user",
    };
  }
}

module.exports = { getDbUser, getDbUsers, createDbUser, addDbUserDrink };
