const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const formatTimestamp = require("../utils");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    get: formatTimestamp,
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const Thought = model("Thought", schema);

module.exports = Thought;
