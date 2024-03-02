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
  google_mid: {
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
  working_hours: {
    day: [
      {
        type: String,
        required: true,
        hours: { type: String, required: true },
      },
    ],
  },

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
  reviews_link: {
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
  reservation_link: {
    type: String,
  },
  business_status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subtype: [
    {
      type: String,
      required: true,
    },
  ],
  photos_sample: [
    {
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
        required: true,
      },
      video_thumbnail_url: {
        type: String,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
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
  emails_and_contacts: [
    {
      email: [
        {
          type: String,
          required: true,
        },
      ],
      phone_numbers: [
        {
          type: Number,
          required: true,
        },
      ],
      facebook: {
        type: String,
        required: true,
      },
      yelp: {
        type: String,
        required: true,
      },
      snapchart: {
        type: String,
      },
      twitter: {
        type: String,
        required: true,
      },
      linkedin: {
        type: String,
        required: true,
      },
      github: {
        type: String,
      },
      youtube: {
        type: String,
      },
      pinterest: {
        type: String,
        required: true,
      },
    },
  ],
});

const DataModel = mongoose.model("businessDetail", businessDetailSchema);
module.exports = DataModel;
