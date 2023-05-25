const Products = require("../models/Products");

const getData = async (req, res) => {
  const data = await Products.findAll({});
  if (!data) throw new Error("Data is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await Products.findOne({ where: { id: req.params.full_name } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {s
  const { product_id, name, merchant_id, price } = req.body;
  if (!product_id) {res.status(400).json("product_id is required")};
  if (!name) {res.status(400).json("name is required")};
  if (!price) {res.status(400).json("price is required")};
  const data = await Products.create({ product_id, name, merchant_id, price });
  res.send(data);
};

const updateData = async (req, res) => {
  const { product_id, name, merchant_id, price } = req.body;
  const data = await Products.findOne({
    where: { id: req.params.full_name },
  });
  data.set({ product_id, name, merchant_id, price });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await Products.findOne({
    where: { id: req.params.full_name },
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
