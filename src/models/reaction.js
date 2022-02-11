const { Schema, Types } = require("mongoose");

const { formatTime } = require("../utils");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
  },

  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    get: formatTime,
  },
};

const schema = new Schema(reactionSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

module.exports = schema;
