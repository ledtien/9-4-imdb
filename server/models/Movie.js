const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    title: { type: String, required: false, unique: false, default: "" },
    description: { type: String },
    year: { type: Number },
    date_published: { type: Number },
    genre: [String],
    duration: { type: Number },
    director: { type: String },
    writer: { type: String },
    country: { type: String },
    language: { type: String },
    actors: { type: String },
    url: { type: String },
    tags: [String],
    likeCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", userSchema);
module.exports = Movie;
