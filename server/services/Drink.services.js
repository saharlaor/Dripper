// Imports
const Drink = require("../models/Drink.models");

// GET
async function getDbDrink(_id) {
  try {
    const drink = await Drink.findOne({ _id });
    return drink;
  } catch (err) {
    console.log("err", err);
    throw { code: 500, message: "Error while fetching drink from DB" };
  }
}

async function getDbUserDrinks(userId) {
  try {
    const drinks = await Drink.find({ userId });
    return drinks;
  } catch (err) {
    throw { code: 500, message: "Error while fetching drink from DB" };
  }
}

// POST
async function createDbDrink({ userId, amount }) {
  try {
    const newDrink = new Drink({
      userId,
      amount,
      timestamp: new Date(),
    });
    const retDrink = await newDrink.save();
    console.log("retDrink", retDrink);
    return retDrink;
  } catch (err) {
    throw {
      code: 500,
      message: "Error while creating drink from DB",
    };
  }
}

module.exports = { getDbDrink, getDbUserDrinks, createDbDrink };
