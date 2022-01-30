exports.checkAuth = (req, res, next) => {
  if (
    req.header("Authorization") === undefined ||
    req.header("Authorization") === null ||
    req.header("Authorization") === ""
  ) {
    return res.send({
      status: "error",
      message: "No authorization",
      data: null,
    });
  } else {
    if (req.header("Authorization") !== process.env.AUTH) {
      return res.send({
        status: "unauthorized",
        message: "Incorrect authorization",
        data: null,
      });
    }
  }
  next();
};
