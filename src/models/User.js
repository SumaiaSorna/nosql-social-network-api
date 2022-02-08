const { Schema, model } = require("mongoose");

const thoughts = require("./Thought");
const friends = require("./Friend");

const userSchema = {
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [friends],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
