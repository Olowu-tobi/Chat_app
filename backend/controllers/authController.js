const authService = require("../services/authService");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginResp = await authService.loginUser(email, password);
    res.status(200).json({
      message: "User logged in successfully",
      status: true,
      token: loginResp.token,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
      status: false,
    });
  }
};

const registerUser = async (req, res) => {
  const { body } = req;
  try {
    const user = await authService.registerUser(body);
    res.status(200).json({
      message: "User registered successfully",
      status: true,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
