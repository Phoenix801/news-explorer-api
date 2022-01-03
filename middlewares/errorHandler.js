const { serverError } = require('../utils/errors');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  // if an error has no status, display 500
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      // check the status and display a message based on it
      message: message || serverError,
    });
};

module.exports = { errorHandler };
