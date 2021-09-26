import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/covid19")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Not connected to DB");
  });

module.exports = mongoose.connection;
