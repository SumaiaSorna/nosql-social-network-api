const createFriendForUser = (req, res) => {
  res.send("createFriendForUser");
};
const deleteFriendByUser = (req, res) => {
  const { userId, friendId } = req.params;

  console.log("userId", userId);
  console.log("friendId", friendId);

  res.send("deleteFriendByUser");
};

module.exports = { createFriendForUser, deleteFriendByUser };
