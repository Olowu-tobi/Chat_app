const Message = require("../models/messageModel");
const Conversation = require("../models/conversationModel");

const sendMesage = async (senderId, receiverId, message) => {
  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
      await newMessage.save();
      return newMessage;
    }
  } catch (error) {
    throw new Error(error);
  }
};
const getMessage = async (senderId, receiverId) => {
  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    return conversation.messages;
  } catch (error) {
    console.log(`Couldn't get message ${error.message}`);
  }
};
module.exports = { sendMesage, getMessage };
