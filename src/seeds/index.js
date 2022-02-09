const mongoose = require("mongoose");

const { User, Thought } = require("../models");
const users = require("./data/users");
const thoughts = require("./data/thoughts");

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

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const usersFromDb = await User.find({});

    const thoughtFromDb = await Thought.find({});

    const promises = thoughtFromDb.map(async (thought) => {
      const userName = thought.username;
      const user = usersFromDb.find((user) => user.userName == userName);

      const userId = user._id.toString();

      const thoughtId = thought._id;

      user.thoughts.push(thoughtId.toString());

      await User.findByIdAndUpdate(userId, { ...user });

      // console.log(userId.toString());
    });

    await Promise.all(promises);

    const promise = usersFromDb.map(async (currentUser) => {
      const userName = currentUser.userName;
      //console.log(userName);

      const users = usersFromDb.filter((user) => user.userName != userName);
      // console.log(users);

      const currentUserId = currentUser._id.toString();

      const randomUser = users[Math.floor(Math.random() * users.length)];

      currentUser.friends.push(randomUser._id.toString());

      await User.findByIdAndUpdate(currentUserId, { ...currentUser });
    });

    await Promise.all(promise);
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
