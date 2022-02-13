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
  try {
    const { thoughtText, username } = req.body;

    if (thoughtText && username) {
      const newThought = await Thought.create({ thoughtText, username });
      return res.json({ success: true, data: newThought });
    }

    return res.status(400).json({
      success: false,
      error: "Please provide the thoughtText and username",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create newThought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create newThought" });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { thoughtText, username } = req.body;

    const updateThought = await Thought.findByIdAndUpdate(thoughtId, {
      thoughtText,
      username,
    });

    return res.json({ success: true, data: updateThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create update thought" });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const deleteThought = await Thought.findByIdAndDelete({ _id: thoughtId });
    return res.json({ success: true, data: deleteThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete user" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
