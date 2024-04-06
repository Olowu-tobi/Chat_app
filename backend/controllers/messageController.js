const { response } = require("express");
const messageService = require("../services/messageService");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessageController = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const { user_id } = req.user;
  try {
    const messageResp = await messageService.sendMesage(
      user_id,
      receiverId,
      message
    );
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", messageResp);
    }
    res.status(200).json(messageResp);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getMessageController = async (req, res) => {
  const { id: receiverId } = req.params;
  const { user_id } = req.user;
  try {
    const messageResp = await messageService.getMessage(user_id, receiverId);
    messageResp ? res.status(200).json(messageResp) : res.status(200).json([]);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  sendMessageController,
  getMessageController,
};
