const OrderItems = require("../models/OrderItems");

const getData = async (req, res) => {
  const data = await OrderItems.findAll({});
  if (!data) throw new Error("Data is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await OrderItems.findOne({ where: { id: req.params.order_id } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { date, order_id, quantity, product_id, user_id } = req.body;
  if (!order_id) {res.status(400).json("order_id is required")};
  if (!date) {res.status(400).json("date is required")};
  const data = await OrderItems.create({ date, order_id, quantity, product_id, user_id });
  res.send(data);
};

const updateData = async (req, res) => {
  const { date, order_id, quantity, product_id, user_id } = req.body;
  const data = await OrderItems.findOne({
    where: { id: req.params.order_id },
  });
  data.set({ date, order_id, quantity, product_id, user_id });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await OrderItems.findOne({
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
