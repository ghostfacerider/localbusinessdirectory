const axios = require("axios");
// import axios from "axios";

const businessDetail = require("../../models/businessDetailModel");

const options = {
  method: "GET",
  url: "https://local-business-data.p.rapidapi.com/business-details",
  params: {
    business_id: "0x880fd393d427a591:0x8cba02d713a995ed",
    extract_emails_and_contacts: "true",
    extract_share_link: "false",
    region: "us",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": process.env.RapidAPIKey,
    "X-RapidAPI-Host": process.env.RapidAPIHost,
  },
};

const fetchData = async (req, res) => {
  try {
    const response = await axios.request(options);
    const businesses = response.data.data;
    for (let i = 0; i < businesses.length; i++) {
      const business = new businessDetail({
        business_id: businesses[i]["business_id"],
        google_id: businesses[i]["google_id"],
        place_id: businesses[i]["place_id"],
        google_mid: businesses[i]["google_mid"],
        phone_number: businesses[i]["phone_number"],
        name: businesses[i]["name"],
        latitude: businesses[i]["latitude"],
        longitude: businesses[i]["longitude"],
        full_address: businesses[i]["full_address"],
        review_count: businesses[i]["review_count"],
        rating: businesses[i]["rating"],
        timezone: businesses[i]["timezone"],
        working_hours: businesses[i]["working_hours"],
        website: businesses[i]["website"],
        verified: businesses[i]["verified"],
        place_link: businesses[i]["place_link"],
        cid: businesses[i]["cid"],
        reviews_link: businesses[i]["reviews_link"],
        owner_id: businesses[i]["owner_id"],
        owner_link: businesses[i]["owner_link"],
        owner_name: businesses[i]["owner_name"],
        booking_link: businesses[i]["booking_link"],
        reservations_link: businesses[i]["reservations_link"],
        business_status: businesses[i]["business_status"],
        type: businesses[i]["type"],
        subtype: businesses[i]["subtype"],
        photos_sample: businesses[i]["photos_sample"],
        address: businesses[i]["address"],
        district: businesses[i]["district"],
        street_address: businesses[i]["street_address"],
        city: businesses[i]["city"],
        zipcode: businesses[i]["zipcode"],
        state: businesses[i]["state"],
        country: businesses[i]["country"],
        emails_and_contacts: businesses[i]["emails_and_contacts"],
      });
      business.save();
    }

    // res.json({
    //   success: true,
    //   message: "Data fetched and stored successfully",
    // });
    res.json(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
