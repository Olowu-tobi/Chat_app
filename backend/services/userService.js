const User = require("../models/userModel");

const getUsers = async (user_id) => {
  try {
    const user = await User.find({ _id: { $ne: user_id } }).select("-password");
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUser = async (user_id) => {
  try {
    const users = await User.find({ _id: user_id }).select("-password");
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getUsers, getUser };
