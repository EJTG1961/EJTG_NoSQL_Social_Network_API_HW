// Require what's needed
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require("./Reaction");

// create a new schema with table columns to export
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: [
        ({ length }) => length > 0 && length <= 280,
        "Can only be between 1 and 280 characters long!",
      ],
    },
    // getter method to format timestamp when query
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
// reactions count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thoughts", thoughtSchema);

module.exports = Thought;