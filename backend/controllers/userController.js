const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  const { user_id } = req.user;
  try {
    const users = await userService.getUser(user_id);
    res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(401).json({ message: "User not found", error });
  }
};

module.exports = {
  getAllUsers,
};
