// Imports
const { Schema, model } = require("mongoose");

const DrinkSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const Drink = model("Drink", DrinkSchema);

module.exports = Drink;
