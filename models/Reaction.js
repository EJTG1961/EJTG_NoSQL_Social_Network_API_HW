const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// creaste reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    validate: [
      ({ length }) => length <= 280,
      "Cannot be more than 280 characters long!",
    ],
  },
  username: {
    type: String,
    required: true,
  },
  // date format
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

module.exports = reactionSchema;
