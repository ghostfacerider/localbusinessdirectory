const businessDetail = require("../../models/businessDetail");

exports.businessListing = async (req, res) => {
  try {
    const businesses = await businessDetail.find({}).limit(12);
    res.send(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
exports.singleBusiness = async (req, res) => {
  try {
    const business_id = req.query.business_id;
    const businesses = await businessDetail.findOne(business_id);
    console.log("The Single Edge of tomorrow");
    res.send(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// module.exports = fetchData;
