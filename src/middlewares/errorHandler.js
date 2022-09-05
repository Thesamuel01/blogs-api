module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { output: { statusCode, payload } } = err;

    return res.status(statusCode).json({ ...payload });
  }

  return res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: "Unexpected error",
  });
};
