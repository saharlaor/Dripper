// Imports
const { Schema, model } = require("mongoose");
validator = require("validator");

const UserSchema = Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: function (val) {
        // Generated automatically by google auth right now
        // Future proofing for manual logins
        validator.isEmail(val);
      },
    },
  },
  photoUrl: {
    type: String,
    validate: {
      validator: function (val) {
        validator.isURL(val);
      },
    },
  },
  drinkHistory: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
});

const User = model("User", UserSchema);

module.exports = User;
