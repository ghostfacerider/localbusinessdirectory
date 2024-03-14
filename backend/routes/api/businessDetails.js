const businessDetail = require("../../models/businessDetail");

const fetchData = async (req, res) => {
  try {
    const businesses = businessDetail.find({});
    res.send(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
