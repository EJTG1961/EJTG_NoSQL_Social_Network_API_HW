const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/commentExample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use for login executed mongo queries 
mongoose.set("debug", true);

module.exports = mongoose.connection;
