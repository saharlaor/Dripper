// Imports
const {
  getDbUser,
  getDbUsers,
  createDbUser,
  addDbUserDrink,
} = require("../services/User.services");

async function getUser(req, res) {
  const authId = req.params.authId;
  try {
    const user = await getDbUser(authId);

    // Validation
    if (!user)
      throw {
        code: 404,
        message: `No user found with the id of ${authId}`,
      };

    // Response
    res.send(user);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function getUsers(req, res) {
  try {
    const users = await getDbUsers();
    // Validation
    if (!users)
      throw {
        code: 404,
        message: `No users found`,
      };

    // Response
    res.send(users);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function createUser(req, res) {
  try {
    const { uid, name, email, photoURL } = req.body;
    if (!(uid && name && email && photoURL)) {
      throw {
        code: 400,
        message:
          "Bad Request, Fill The Following Fields: uid, name, email, photoURL",
      };
    }

    await createDbUser({ uid, name, email, photoURL });
    const user = await getDbUser(uid);
    if (!user) {
      throw { code: 404, message: "User Not Created" };
    }

    res.status(201).send(data);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function addUserDrink(req, res) {
  try {
    const _id = req.params.id;
    const drinkId = req.body.drinkId;
    if (!(_id && drinkId)) {
      throw {
        code: 400,
        message: "Bad Request, Fill The Following Fields: _id, drinkId",
      };
    }

    const user = await addDbUserDrink({ _id, drinkId });
    if (!user) {
      throw { code: 400, message: "Drink Not Appended to drinkHistory" };
    }

    res.status(201).send(user);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

module.exports = { getUser, getUsers, createUser, addUserDrink };
