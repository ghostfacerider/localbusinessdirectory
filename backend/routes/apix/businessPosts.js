const axios = require("axios");
// import axios from "axios";

const businessPosts = require("../../modelsx/businessPost");

const options = {
  method: "GET",
  url: "https://local-business-data.p.rapidapi.com/business-posts",
  params: {
    business_id: "0x880fd393d427a591:0x8cba02d713a995ed",
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
    console.log(response.data.data.posts);
    const businessPostes = response.data.data.posts;
    for (let i = 0; i < businessPostes.length; i++) {
      const posts = new businessPosts({
        post_id: businessPostes[i]["post_id"],
        post_link: businessPostes[i]["post_link"],
        post_datetime_utc: businessPostes[i]["post_datetime_utc"],
        post_timestamp: businessPostes[i]["post_timestamp"],
        post_text: businessPostes[i]["post_text"],
        post_links: businessPostes[i]["post_links"],
        post_photos: businessPostes[i]["post_photos"],
      });
      posts.save();
    }

    res.json(businessPostes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
