const createReactionForThought = (req, res) => {
  res.send("createReactionForThought");
};
const deleteReactionByThought = (req, res) => {
  const { thoughtId, reactionId } = req.params;

  console.log("thoughtId", thoughtId);
  console.log("reactionId", reactionId);

  res.send("deleteReactionByThought");
};

module.exports = { createReactionForThought, deleteReactionByThought };
