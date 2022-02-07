const { Schema, model } = require("mongoose");

const thoughSchema = {};

const schema = new Schema(thoughSchema);

const Thought = model("thought", schema);

module.exports = Thought;
