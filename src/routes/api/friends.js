const { Router } = require("express");

const {
  createFriendForUser,
  deleteFriendByUser,
} = require("../../controllers/api/friends");

const router = Router();

router.post("/", createFriendForUser);
router.delete("/:friendId", deleteFriendByUser);

module.exports = router;
