const User = require("../models/userModel");

const getUser = async (user_id) => {
  try {
    const users = await User.find({ _id: { $ne: user_id } }).select(
      "-password"
    );
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getUser };
