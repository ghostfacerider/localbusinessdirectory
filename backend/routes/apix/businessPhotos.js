const axios = require("axios");
// import axios from "axios";

const business_photos = require("../../modelsx/businessPhoto");

const options = {
  method: "GET",
  url: "https://local-business-data.p.rapidapi.com/business-photos",
  params: {
    business_id: "0x89c259b5a9bd152b:0x31453e62a3be9f76",
    limit: "20",
    region: "us",
  },
  headers: {
    "X-RapidAPI-Key": process.env.RapidAPIKey,
    "X-RapidAPI-Host": process.env.RapidAPIHost,
  },
};

const fetchData = async (req, res) => {
  try {
    const response = await axios.request(options);
    console.log(response.data.data);
    const businessphotos = response.data.data;
    for (let i = 0; i < businessphotos.length; i++) {
      const photo = new business_photos({
        photo_id: businessphotos[i]["photo_id"],
        photo_url: businessphotos[i]["photo_url"],
        photo_url_large: businessphotos[i]["photo_url_large"],
        type: businessphotos[i]["type"],
        photo_datetime_utc: businessphotos[i]["photo_datetime_utc"],
        photo_timestamp: businessphotos[i]["photo_timestamp"],
      });
      photo.save();
    }

    res.json(businessphotos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
