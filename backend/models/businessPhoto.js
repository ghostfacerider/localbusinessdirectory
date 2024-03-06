const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessPhotosSchema = new Schema({
  photo_id: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
    required: true,
  },
  photo_url_large: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    required: true,
  },
  photo_datetime_utc: {
    type: Date,
    required: true,
  },
  photo_timestamp: {
    type: Number,
    required: true,
  },
});

const DataModel = mongoose.model("businessPhotos", businessPhotosSchema);
module.exports = DataModel;
