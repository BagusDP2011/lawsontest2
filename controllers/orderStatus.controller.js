const OrderStatus = require("../models/OrderStatus");

const getData = async (req, res) => {
  const data = await OrderStatus.findAll({});
  if (!data) throw new Error("Data is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await OrderStatus.findOne({ where: { id: req.params.order_id } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { order_id, status_id } = req.body;
  if (!order_id) {res.status(400).json("order_id is required")};
  if (!status_id) {res.status(400).json("status_id is required")};
  const data = await OrderStatus.create({ order_id, status_id });
  res.send(data);
};

const updateData = async (req, res) => {
  const { order_id, status_id } = req.body;
  const data = await OrderStatus.findOne({
    where: { id: req.params.order_id },
  });
  data.set({ order_id, status_id });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await OrderStatus.findOne({
    where: { id: req.params.order_id },
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
