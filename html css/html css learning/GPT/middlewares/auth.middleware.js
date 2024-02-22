const key = require("../config/key");

const jwt = require("jsonwebtoken");

const User = require("../schema/User");

// const ResponseError = require("../helpers/ResponseError");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return
  }

  const token = authorization.substring(7);

  const decode = jwt.verify(token, key.JWT_SECRET);

  const user = await User.findById(decode._id);

  if (!user) {
    return
  }

  req.user = user;
  req.userId = user._id;
  next();
};
