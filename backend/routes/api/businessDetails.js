const axios = require("axios");
// import axios from "axios";

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
    console.log(response.data);
    // for (let i = 0; i < response.length; i++) {
    //   const businessDetail = new businessDetail({
    //     business_id: response[i]["business_id"],
    //     extract_emails_and_contacts: response[i]["extract_emails_and_contacts"],
    //     extract_share_link: response[i]["extract_share_link"],
    //     region: response[i]["region"],
    //     language: response[i]["language"],
    //   });
    //   businessDetail.save();
    // }

    res.json({
      success: true,
      message: "Data fetched and stored successfully",
    });
    return response.data;
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
