const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialmedia",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use for login mongo queries executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
