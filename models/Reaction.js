// Require what's needed
const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    reactionId: {
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      // Set default value to current timestamp
      default: Date.now,
      // getter method to format timestamp when query
      get: (timestamp) => dateFormat(timestamp),
    },

    username: {
      type: String,
      required: true,
    },

    // array created with the reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;