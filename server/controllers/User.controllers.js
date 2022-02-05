// Imports
const {
  getDbUser,
  getDbUsers,
  createDbUser,
} = require("../services/User.services");

async function getUser(req, res) {
  const authId = req.params.authId;
  try {
    const user = await getDbUser(authId);
    // Validation
    if (!user)
      throw Error({
        code: 404,
        message: `No user found with the id of ${authId}`,
      });

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
      throw Error({
        code: 404,
        message: `No users found`,
      });

    // Response
    res.send(users);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

async function createUser(req, res) {
  try {
    const { uid, name, email, photoUrl } = req.body;
    if (!(uid && name && email && photoUrl)) {
      throw Error({
        code: 400,
        message:
          "Bad Request, Fill The Following Fields: uid, name, email, photoUrl",
      });
    }

    const user = createUser({ uid, name, email, photoUrl });
    if (!user) {
      throw Error({ code: 404, message: "User Not Created" });
    }

    res.status(201).send(data);
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
}

module.exports = { getUser, getUsers, createUser };
