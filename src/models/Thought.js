const { Schema, model } = require("mongoose");
const moment = require("moment");

const formatTimestamp = require("../utils/index");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: moment(),
    get: formatTimestamp,
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const Thought = model("thought", schema);

module.exports = Thought;
