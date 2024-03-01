const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessDetailSchema = new Schema({
  Buiness_id: {
    type: Number,
    required: true,
  },
  extract_emails_and_contacts: {
    type: String,
    required: true,
  },
  extract_share_link: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("businessDetail", businessDetailSchema);
module.exports = DataModel;
