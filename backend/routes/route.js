const express = require("express");
const route = express.Router();
const { authChecker } = require("../middleware/authMiddleware");

// importing of controllers

const authController = require("../controllers/authController");
const messsageController = require("../controllers/messageController");
const userController = require("../controllers/userController");

route.post("/auth/login", authController.loginUser);
route.post("/auth/register", authController.registerUser);

route.use(authChecker);

route.post("/message/send/:id", messsageController.sendMessageController);
route.get("/message/:id", messsageController.getMessageController);

route.get("/users", userController.getAllUsers);
route.get("/profile", userController.getUser);
module.exports = route;
