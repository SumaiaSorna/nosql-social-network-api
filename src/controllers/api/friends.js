const { User } = require("../../models");

const createFriendForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const newFriend = await User.findByIdAndUpdate(
      userId,
      {
        $push: { friends: req.body._id },
      },
      { new: true }
    ).populate("friends");
    return res.json({ success: true, newFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new friend" });
  }
};

const deleteFriendByUser = async (req, res) => {
  const { userId, friendId } = req.params;

  console.log("userId", userId);
  console.log("friendId", friendId);

  res.send("deleteFriendByUser");
};

module.exports = { createFriendForUser, deleteFriendByUser };
