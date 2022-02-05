// Imports
const { Schema, model } = require("mongoose");

const DrinkSchema = Schema({
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
