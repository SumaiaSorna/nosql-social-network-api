const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const thought = await Thought.findById(thoughtId);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const createThought = async (req, res) => {
  res.send("createThought");
};

const updateThoughtById = async (req, res) => {
  const { thoughtId } = req.params;

  console.log("thoughtId", thoughtId);

  res.send("updateThoughtById");
};

const deleteThoughtById = async (req, res) => {
  const { thoughtId } = req.params;

  console.log("thoughtId", thoughtId);

  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
