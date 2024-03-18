// const businessDetail = require("../../modelsx/businessDetail");
const businessDetail = require("../../modelsx/businessSearch");
const axios = require("axios");
const rapidApiJob = async (find, where, result = {}) => {
  try {
    const options = {
      method: "GET",
      url: "https://local-business-data.p.rapidapi.com/search",
      params: {
        query: `${find} , ${where}`,
        limit: "10",
        language: "en",
        region: "us",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RapidAPIKey,
        "X-RapidAPI-Host": process.env.RapidAPIHost,
      },
    };
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
    return (result = businesses);
    // res.json(query);
  } catch (ex) {
    console.error(ex);
    // res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const fetchData = async (req, res) => {
  try {
    const where = req.query.where;
    const find = req.query.find;
    const filter = {
      ...(find && {
        $or: [
          { name: { $regex: find, $options: "i" } },
          { type: { $regex: find, $options: "i" } },
        ],
      }),
      ...(where && {
        $or: [
          { address: { $regex: where, $options: "i" } },
          { city: { $regex: where, $options: "i" } },
          { zipcode: { $regex: where, $options: "i" } },
        ],
      }),
    };

    const businesses = await businessDetail.find(filter);
    if (businesses.length !== 0) res.send(businesses);

    if (businesses.length === 0) {
      console.log("No data in DB, Looking to the api");
      const response = await rapidApiJob(find, where);
      res.send(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
