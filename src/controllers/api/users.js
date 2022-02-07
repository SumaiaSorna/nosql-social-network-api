const getUsers = (req, res) => {
  res.send("getUsers");
};

const getUserById = (req, res) => {
  const { userId } = req.params;

  console.log("userId", userId);

  res.send("getUserById");
};

const createUser = (req, res) => {
  res.send("createUser");
};

const updateUserById = (req, res) => {
  const { userId } = req.params;

  console.log("userId", userId);

  res.send("updateUserById");
};

const deleteUserById = (req, res) => {
  const { userId } = req.params;

  console.log("userId", userId);

  res.send("deleteUserById");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
