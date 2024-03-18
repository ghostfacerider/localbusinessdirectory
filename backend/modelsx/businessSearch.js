const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const dayTimeSchema = new Schema({
  Monday: [String],
  Tuesday: [String],
  Wednesday: [String],
  Thursday: [String],
  Friday: [String],
  Saturday: [String],
  Sunday: [String],
});

const businessSearchSchema = new Schema({
  business_id: {
    type: String,
  },
  google_id: {
    type: String,
  },
  place_id: {
    type: String,
  },
  google_mid: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  name: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  full_address: {
    type: String,
  },
  review_count: {
    type: String,
  },
  rating: {
    type: Number,
  },
  timezone: {
    type: String,
  },
  working_hours: {
    type: dayTimeSchema,
  },

  website: {
    type: String,
  },
  verified: {
    type: String,
  },
  place_link: {
    type: String,
  },
  cid: {
    type: String,
  },
  reviews_link: {
    type: String,
  },
  owner_id: {
    type: String,
  },
  owner_link: {
    type: String,
  },
  owner_name: {
    type: String,
  },
  booking_link: {
    type: String,
  },
  reservation_link: {
    type: String,
  },
  business_status: {
    type: String,
  },
  type: {
    type: String,
  },
  subtypes: [
    {
      type: [String],
    },
  ],
  photos_sample: [
    {
      photo_id: {
        type: String,
      },
      photo_url: {
        type: String,
      },
      photo_url_large: {
        type: String,
      },
      video_thumbnail_url: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      type: {
        type: String,
      },
      photo_datetime_utc: {
        type: Date,
      },
      photo_timestamp: {
        type: Number,
      },
    },
  ],

  address: {
    type: String,
  },
  district: {
    type: String,
  },
  street_address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  emails_and_contacts: {
    emails: {
      type: [String],
    },
    phone_numbers: {
      type: [String],
    },
    facebook: {
      type: String,
    },
    yelp: {
      type: String,
    },
    snapchart: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    youtube: {
      type: String,
    },
    pinterest: {
      type: String,
    },
  },
});

const DataModel = mongoose.model("businessSearch", businessSearchSchema);
module.exports = DataModel;
