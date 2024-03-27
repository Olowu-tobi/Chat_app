const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const saltRounds = 10;

const loginUser = async (email, password) => {
  // check if user is found by email address
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Account not found");
  }
  // check if password is correct
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Password is incorrect");
  }

  // Generate JWT Token
  const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 86400, // expires in 24 hours
  });
  return { token };
};

const registerUser = async (userData) => {
  // destruct all neccessary values
  const { first_name, last_name, email, password, gender } = userData;
  // check if user already exists
  const user = await User.findOne({ email: email });
  if (user) {
    throw new Error("User already exists");
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${first_name}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${first_name}`;

  // create new user
  const newUser = new User({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: hashedPassword,
    gender: gender,
    profile_image: gender === "male" ? boyProfilePic : girlProfilePic,
  });
  // save user
  const savedUser = await newUser.save();
  return savedUser;
  // Generate JWT Token
};

module.exports = { loginUser, registerUser };
