const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessPhotoDetailsSchema = new Schema({
  photo_id: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  owner_id: {
    type: Number,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
  owner_photo: {
    type: String,
    required: true,
  },
  owner_profile_link: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model(
  "businessPhotoDetails",
  businessPhotoDetailsSchema
);
module.exports = DataModel;
