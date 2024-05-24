const express = require("express");
const http = require("http");
const { connection } = require("mongoose");
const socketIo = require("socket.io");
const { Server } = socketIo;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://chat-app-client-ruby.vercel.app",
    ],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != undefined) userSocketMap[userId] = socket.id;

  io.emit("onlineUsers", Object.keys(userSocketMap));

  socket.on("sendMessage", async (message) => {
    const { senderId, receiverId, content } = message;
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // Recipient is online, forward the message
      io.to(receiverSocketId).emit("receiveMessage", { senderId, content });
    } else {
      // Recipient is offline, generate bot response
      const botResponse = await getBotResponse(content);
      io.to(userSocketMap[senderId]).emit("receiveMessage", {
        senderId: "bot",
        content: botResponse,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("onlineUsers", Object.keys(userSocketMap));
  });
});

const getBotResponse = async (message) => {
  // Implement your bot logic here
  return `Bot: You said "${message}"`;
};

module.exports = { app, io, server, getReceiverSocketId };
