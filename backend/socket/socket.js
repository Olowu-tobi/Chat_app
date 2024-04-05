const express = require("express");
const http = require("http");
const { connection } = require("mongoose");
const socketIo = require("socket.io");
const { Server } = socketIo;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

module.exports = { app, io, server };
