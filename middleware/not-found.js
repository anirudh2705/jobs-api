const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send(`Route doesn't exixt`);

module.exports = notFound;
