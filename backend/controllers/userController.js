const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  const { user_id } = req.user;
  try {
    const users = await userService.getUsers(user_id);
    res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(401).json({ message: "Users not found", error });
  }
};

const getUser = async (req, res) => {
  const { user_id } = req.user;
  try {
    const user = await userService.getUser(user_id);
    res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    res.status(401).json({ message: "User not found", error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
};
