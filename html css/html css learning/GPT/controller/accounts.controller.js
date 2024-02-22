const User = require("../schema/User");

const ResponseError = require("../helpers/ResponseError");


module.exports.getAllAccounts = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    statusCode: 200,
    users,
  });
};

module.exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  const users = await User.findById(userId);

  if (!users) {
    throw new ResponseError(404, "Resource not found");
  }

  res.status(200).json({
    statusCode: 200,
    users,
  });
};

module.exports.createNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    if(user._id) {
      res.status(201).json({
        statusCode: 201,
        message: 'User '+ user.name +' created',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new ResponseError(404, 'Người dùng không tồn tại');
    }

    Object.assign(user, updatedData);
    await user.save();

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports.updatePersonalInformation = async (req, res) => {
  try {
    const { userId } = req.userId;
    const updatedData = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new ResponseError(404, 'Người dùng không tồn tại');
    }

    Object.assign(user, updatedData);
    await user.save();

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};