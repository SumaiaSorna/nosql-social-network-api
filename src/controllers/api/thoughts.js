const getThoughts = (req, res) => {
  res.send("getThoughts");
};

const getThoughtById = (req, res) => {
  const { thoughtId } = req.params;

  console.log("thoughtId", thoughtId);

  res.send("getThoughtById");
};

const createThought = (req, res) => {
  res.send("createThought");
};

const updateThoughtById = (req, res) => {
  const { thoughtId } = req.params;

  console.log("thoughtId", thoughtId);

  res.send("updateThoughtById");
};

const deleteThoughtById = (req, res) => {
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
