const { User } = require("../../models");

const createFriendForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { _id } = req.body;

    if (_id) {
      const newFriend = await User.findByIdAndUpdate(
        userId,
        {
          $push: { friends: req.body._id },
        },
        { new: true }
      ).populate("friends");
      return res.json({ success: true, newFriend });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create new friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new friend" });
  }
};

const deleteFriendByUser = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const deleteFriend = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { friends: { $in: [friendId] } },
      },
      { new: true }
    );
    return res.json({ success: true, deleteFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete friend" });
  }
};

module.exports = { createFriendForUser, deleteFriendByUser };
