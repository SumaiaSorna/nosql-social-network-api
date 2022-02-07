const { Router } = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

const router = Router();

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/", deleteUserById);

module.exports = router;
