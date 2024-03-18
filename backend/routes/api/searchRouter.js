const businessDetail = require("../../models/businessDetail");

const fetchData = async (req, res) => {
  try {
    // const where = req.query.where;
    // const find = req.query.find;

    // const businesses = businessDetail.aggregate([
    //   {
    //     $match: {
    //       $or: [
    //         { name: { $regex: find, $options: "i" } },
    //         { type: { $regex: find, $options: "i" } },
    //       ],
    //       location: { $regex: where, $options: "i" },
    //     },
    //   },
    // ]);

    // if(!businesses){
    //     console.log("No doata found")
    // }

    const businesses = businessDetail.find()
    res.send(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = fetchData;
