const express = require("express");
const route = express.Router();
const { authChecker } = require("../middleware/authMiddleware");

// importing of controllers

const authController = require("../controllers/authController");
const messsageController = require("../controllers/messageController");
const userController = require("../controllers/userController");
const homeController = require("../controllers/homeController");

route.post("/auth/login", authController.loginUser);
route.post("/auth/register", authController.registerUser);
// route.get("/", homeController.home);

route.post(
  "/message/send/:id",
  authChecker,
  messsageController.sendMessageController
);
route.get("/message/:id", authChecker, messsageController.getMessageController);

route.get("/users", authChecker, userController.getAllUsers);
route.get("/profile", authChecker, userController.getUser);
module.exports = route;
