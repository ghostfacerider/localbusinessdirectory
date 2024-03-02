const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessReviewsSchema = new Schema({
  review_id: {
    type: String,
    required: true,
  },
  review_text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review_datetime_utc: {
    type: Date,
    required: true,
  },
  review_timestamp: {
    type: Date,
    required: true,
  },
  review_link: {
    type: String,
    required: true,
  },
  review_photos: [
    {
      type: String,
      required: true,
    },
  ],
  like_count: {
    type: Number,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  author_photo_url: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("businessReviews", businessReviewsSchema);
module.exports = DataModel;
