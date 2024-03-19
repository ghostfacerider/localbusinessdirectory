// const businessDetail = require("../../modelsx/businessDetail");
const businessDetail = require("../../modelsx/businessSearch");
const axios = require("axios");

const rapidApiSearchJob = async (find, where, result = {}) => {
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
    for (const business of businesses) {
      const newBusiness = new businessDetail({
        ...business,
        emails_and_contacts: business.emails_and_contacts || [],
      });
      await newBusiness.save();
    }
    return (result = businesses);
  } catch (ex) {
    console.error(ex);
  }
};

const rapidApiLocationJob = async (find, latitude, longitude, result = {}) => {
  try {
    const options = {
      method: "GET",
      url: "https://local-business-data.p.rapidapi.com/search-in-area",
      params: {
        query: `${find}`,
        lat: `${latitude}`,
        lng: `${longitude}`,
        zoom: "13",
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
    for (const business of businesses) {
      const newBusiness = new businessDetail({
        ...business,
        emails_and_contacts: business.emails_and_contacts || [],
      });
      await newBusiness.save();
      return (result = businesses);
      // res.json(query);
    }
  } catch (ex) {
    console.error(ex);
    // res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.fetchSearchData = async (req, res) => {
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
      const response = await rapidApiSearchJob(find, where);
      res.send(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.fetchSearchInAreaData = async (req, res) => {
  try {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const find = req.query.find;
    const filter = {
      ...(latitude &&
        longitude && {
          $and: [
            { latitude: { $regex: latitude, $options: "i" } },
            { longitude: { $regex: longitude, $options: "i" } },
          ],
          ...(find && {
            $or: [
              { name: { $regex: find, $options: "i" } },
              { type: { $regex: find, $options: "i" } },
            ],
          }),
        }),
    };

    const businesses = await businessDetail.find(filter);
    if (businesses.length !== 0) res.send(businesses);

    if (businesses.length === 0) {
      console.log("No data in DB, Looking to the api");
      const response = await rapidApiLocationJob(find , latitude, longitude);
      res.send(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
