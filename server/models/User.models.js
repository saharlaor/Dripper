// Imports
const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  authId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
});

const User = model("User", UserSchema);

module.exports = User;
