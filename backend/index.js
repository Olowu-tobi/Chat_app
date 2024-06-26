const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/route");
const { app, server } = require("./socket/socket");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 3000;
__dirname = path.resolve();

const mongodbUrl = process.env.MONGODB_URL;
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(route);
app.use(express.static(path.join(__dirname, "/frontend/my_chat/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/my_chat/dist/index.html"));
});

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((err) =>
    console.error(`Error in connection to MongoDB: ${err.message}`)
  );
