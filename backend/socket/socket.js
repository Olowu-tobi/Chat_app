const express = require("express");
const http = require("http");
const { connection } = require("mongoose");
const socketIo = require("socket.io");
const { Server } = socketIo;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};
io.use((socket, next) => {
  socket.handshake.headers.origin = "https://chat-app-client-ruby.vercel.app";
  next();
});
const userSocketMap = {};
io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != undefined) userSocketMap[userId] = socket.id;

  io.emit("onlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("onlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server, getReceiverSocketId };
