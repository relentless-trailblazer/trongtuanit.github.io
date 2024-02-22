const key = require("../config/key");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../schema/User");

// const userValidate = require("../validations/user.validate");

const ResponseError = require("../helpers/ResponseError");

const typeRole = require("../constants/typeRole");

module.exports.signUp = async (req, res, next) => {
  const { ...body } = req.body;
  body.role = 'user';

  // const { value, error } = userValidate(body);

  if (error) {
    throw new ResponseError(400, error.details);
  }

  const user = await User.create(value);

  const token = jwt.sign(
    { username: user.username, _id: user._id },
    key.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    userId: user._id,
    username: user.username,
    jwt: token,
  });
};

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  const userByUsername = await User.findOne({ username });
  const userByPhone = await User.findOne({ phoneNumber: username });

  if(userByUsername) {
    if (!bcrypt.compareSync(password, userByUsername.password)) {
      throw new ResponseError(400, "Username or password invalid");
    }
  
    const token = jwt.sign(
      { username: userByUsername.username, _id: userByUsername._id },
      key.JWT_SECRET,
      { expiresIn: "3d" }
    );
  
    res.status(200).json({
      userId: userByUsername._id,
      username: userByUsername.username,
      accessToken: token,
    }); 
  } else if(userByPhone) {

    if (!bcrypt.compareSync(password, userByPhone.password)) {
      throw new ResponseError(400, "Username or password invalid");
    }

    const token = jwt.sign(
      { username: userByPhone.phoneNumber, _id: userByPhone._id },
      key.JWT_SECRET,
      { expiresIn: "3d" }
    );
  
    res.status(200).json({
      user: userByPhone,
      accessToken: token,
    }); 

  }
  else {
    res.status(400).json({
      message: 'ko the login'
    }); 
  }


  
};

module.exports.validateToken = async (req, res, next) => {
  const token = req.body.jwt;

  const decode = jwt.verify(token, key.JWT_SECRET);

  const user = await User.findById(decode._id);

  if (!user) {
    throw new ResponseError(401, "Invalid token");
  }

  const newToken = jwt.sign(
    { username: user.username, _id: user._id },
    key.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    user,
    accessToken: newToken,
  });
};
