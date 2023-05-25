const Merchant = require("../models/Merchant");

const getData = async (req, res) => {
  const data = await Merchant.findAll({});
  if (!data) throw new Error("No data found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await Merchant.findOne({ where: { id: req.params.id } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { merchant_name, address, city_id, phone, expire_date } = req.body;
  if (!merchant_name) {res.status(400).json("merchant_name is required")};
  if (!address) {res.status(400).json("description is required")};
  const data = await Merchant.create({ merchant_name, address, city_id, phone, expire_date });
  res.send(data);
};

const updateData = async (req, res) => {
  const { merchant_name, address, city_id, phone, expire_date } = req.body;
  const data = await Merchant.findOne({
    where: { id: req.params.id },
  });
  data.set({ merchant_name, address, city_id, phone, expire_date });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await Merchant.findOne({
    where: { id: req.params.id },
  });
  await data.destroy();
  res.status(204).send();
};

module.exports = {
  getData,
  addData,
  updateData,
  deleteData,
  getSpecificData,
};
