const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://shanmugapriyab211:shanmuga%402006@cluster0.nf2jr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
