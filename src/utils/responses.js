const respond = (responseHandler, data, statusCode = 200, headers = {}) => {
  responseHandler
    .set({
      ...headers,
      "Content-type": "application/vnd.api+json"
    })
    .status(statusCode)
    .json(data);
};

const respondError = (responseHandler, error) => {
  const status = error.status || 500;

  const responseData = {
    errors: [{ status, detail: error.message }]
  };

  respond(responseHandler, responseData, status);
};

module.exports = {
  respond,
  respondError
};
