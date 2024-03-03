const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessPostsSchema = new Schema({
  post_id: {
    type: String,
    required: true,
  },
  post_link: {
    type: String,
    required: true,
  },
  post_datetime_utc: {
    type: Date,
    required: true,
  },
  post_timestamp: {
    type: Number,
    required: true,
  },
  post_text: {
    type: String,
    required: true,
  },
  post_links: [
    {
      url: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
    },
  ],
  post_photos: [
    {
      type: String,
      required: true,
    },
  ],
});

const DataModel = mongoose.model("businessPosts", businessPostsSchema);
module.exports = DataModel;
