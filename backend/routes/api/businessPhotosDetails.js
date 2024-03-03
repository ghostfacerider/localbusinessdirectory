const axios = require("axios");
// import axios from "axios";

const business_photo_details = require("../../models/businessPhotoDetail");

const options = {
  method: "GET",
  url: "https://local-business-data.p.rapidapi.com/photo-details",
  params: {
    business_id: "0x89c259b5a9bd152b:0x31453e62a3be9f76",
    photo_id: "AF1QipMPYCqZ5Fe8a7Jc51KT9pWOS5c6tOKY_xvkCl23",
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
    const businessPhotoDetails = response.data.data;
    for (let i = 0; i < businessPhotoDetails.length; i++) {
      const business_PhotoDetails = new business_photo_details({
        photo_id: businessPhotoDetails[i]["photo_id"],
        caption: businessPhotoDetails[i]["caption"],
        owner_id: businessPhotoDetails[i]["owner_id"],
        owner_name: businessPhotoDetails[i]["owner_name"],
        owner_photo: businessPhotoDetails[i]["owner_photo"],
        owner_profile_link: businessPhotoDetails[i]["owner_profile_link"],
      });
      business_PhotoDetails.save();
    }

    res.json(businessPhotoDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
