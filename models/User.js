// Require what is needed from packages installed
const { Schema, model, Types } = require("mongoose");

// create a new schema with table columns to export
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "Enter a valid e-mail address"],
    },
    thoughts: [],
    friends: [this],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
// Keep virtual friends count
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;