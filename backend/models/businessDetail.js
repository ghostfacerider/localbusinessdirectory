const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const businessDetailSchema = new Schema({
  business_id: {
    type: String,
    required: true,
  },
  google_id: {
    type: String,
    required: true,
  },
  place_id: {
    type: String,
    required: true,
  },
  business_mid: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  full_address: {
    type: String,
    required: true,
  },
  review_count: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  working_hours: [
    {
      type: String,
      required: true,
    },
  ],
  website: {
    type: String,
    required: true,
  },
  verified: {
    type: String,
    required: true,
  },
  place_link: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
  },
  review_link: {
    type: String,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  owner_link: {
    type: String,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
  booking_link: {
    type: String,
    required: true,
  },
  reservation_status: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    required: true,
  },
  photos_sample: [
    {
      type: String,
      required: true,
    },
  ],
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  street_address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("businessDetail", businessDetailSchema);
module.exports = DataModel;
