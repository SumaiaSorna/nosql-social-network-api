const formatTimestamp = (createdAt) => {
  const formatTime = moment(createdAt, "MMMM Do YYYY, h:mm:ss a");
  return formatTime;
};

module.exports = formatTimestamp;
