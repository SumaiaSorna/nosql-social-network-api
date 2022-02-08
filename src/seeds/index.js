const mongoose = require("mongoose");

const { User } = require("../models");
const users = require("./data/users");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();