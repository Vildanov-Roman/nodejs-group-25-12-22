const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "This route does't exist" });
};

module.exports = {
  notFoundHandler,
};
