const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    releaseYear: {
      type: String,
      requiered: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Artist",
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);
module.exports = { Song };
