const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require("./routes/route");
const { app, server } = require("./socket/socket");

dotenv.config();
const PORT = process.env.PORT || 3000;

const mongodbUrl = process.env.MONGODB_URL;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(route);

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
