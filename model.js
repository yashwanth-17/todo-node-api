const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

module.exports = model("Todo", todoSchema);
