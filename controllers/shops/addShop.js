const { Shop } = require("../../models");
// const { RequestError } = require("../../helpers");

const addShop = async (req, res) => {
  const newShop = await Shop.create({ ...req.body });

  return res.status(201).json({
    message: "Success",
    data: newShop,
  });
};

module.exports = addShop;
