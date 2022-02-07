const { Schema, model } = require("mongoose");
const moment = require("moment");
const formatTimestamp = require("../utils/index");

const reactions = require("./Reaction");

const thoughSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: moment(),
    required: true,
    get: formatTimestamp,
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [reactions],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const schema = new Schema(thoughSchema);

const Thought = model("thought", schema);

module.exports = Thought;
