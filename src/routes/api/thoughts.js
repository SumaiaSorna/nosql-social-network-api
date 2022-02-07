const { Router } = require("express");

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getThoughts);
router.get("/:thoughtId", getThoughtById);
router.post("/", createThought);
router.put("/:thoughtId", updateThoughtById);
router.delete("/", deleteThoughtById);

module.exports = router;
