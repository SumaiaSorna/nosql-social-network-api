const createFriendForUser = async (req, res) => {
  res.send("createFriendForUser");
};
const deleteFriendByUser = async (req, res) => {
  const { userId, friendId } = req.params;

  console.log("userId", userId);
  console.log("friendId", friendId);

  res.send("deleteFriendByUser");
};

module.exports = { createFriendForUser, deleteFriendByUser };
