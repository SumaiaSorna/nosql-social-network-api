const { Schema } = require("mongoose");

const moment = require("moment");
const formatTimestamp = require("../utils/index");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  reactionBody: {
    type: String,
    required: true,
    MaxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: moment(),
    get: formatTimestamp,
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
