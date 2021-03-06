const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const { formatTime } = require("../utils");

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
    get: formatTime,
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

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

module.exports = Thought;
