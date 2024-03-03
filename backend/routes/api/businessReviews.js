const axios = require("axios");
// import axios from "axios";

const Reviews = require("../../models/businessReview");

const options = {
  method: "GET",
  url: "https://local-business-data.p.rapidapi.com/business-reviews",
  params: {
    business_id: "0x89c259b5a9bd152b:0x31453e62a3be9f76",
    limit: "5",
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
    const businessReviews = response.data.data;
    for (let i = 0; i < businessReviews.length; i++) {
      console.log(businessReviews[i]);
      const businessReview = new Reviews({
        review_id: businessReviews[i]["review_id"],
        review_text: businessReviews[i]["review_text"],
        rating: businessReviews[i]["rating"],
        review_datetime_utc: businessReviews[i]["review_datetime_utc"],
        review_timestamp: businessReviews[i]["review_timestamp"],
        review_link: businessReviews[i]["review_link"],
        review_photos: businessReviews[i]["review_photos"],
        like_count: businessReviews[i]["like_count"],
        author_name: businessReviews[i]["author_name"],
        author_photo_url: businessReviews[i]["author_photo_url"],
      });
      businessReview.save();
    }

    res.json(businessReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
