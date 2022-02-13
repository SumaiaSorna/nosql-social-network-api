const { User } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("thoughts");
    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("thoughts");
    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const createUser = async (req, res) => {
  try {
    const { userName, email } = req.body;

    if (userName && email) {
      const newUser = await User.create({ userName, email });
      return res.json({ success: true, data: newUser });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the username and email" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create newUser | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create newUser" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { userName, email } = req.body;

    const updateUser = await User.findByIdAndUpdate(userId, {
      userName,
      email,
    });

    return res.json({ success: true, data: updateUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create update user" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete({ _id: userId });
    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete user" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
