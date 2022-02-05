// Imports
const {
  getDbDrink,
  getDbUserDrinks,
  createDbDrink,
} = require("../services/Drink.services");

async function getDrink(req, res) {
  const _id = req.params._id;
  try {
    const drink = await getDbDrink(_id);

    // Validation
    if (!drink)
      throw {
        code: 404,
        message: `No drink found with the id of ${_id}`,
      };

    // Response
    res.send(drink);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function getUserDrinks(req, res) {
  try {
    const userId = req.query.userId;
    const drinks = await getDbUserDrinks(userId);

    // Validation
    if (!drinks)
      throw {
        code: 404,
        message: `No drinks found`,
      };

    // Response
    res.send(drinks);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function createDrink(req, res) {
  try {
    const { userId, amount } = req.body;
    if (!(userId && amount)) {
      throw {
        code: 400,
        message: "Bad Request, Fill The Following Fields: userId, amount",
      };
    }

    const drink = await createDbDrink({ userId, amount });
    // await getDbDrink(uid);
    if (!drink) {
      throw { code: 404, message: "Drink Not Created" };
    }

    res.status(201).send(drink);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

module.exports = { getDrink, getUserDrinks, createDrink };
