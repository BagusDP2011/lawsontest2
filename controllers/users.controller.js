const Users = require("../models/Users");

const getData = async (req, res) => {
  const data = await Users.findAll({});
  if (!data) throw new Error("Data is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await Users.findOne({ where: { id: req.params.full_name } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { date_of_birth, full_name, address, phone, email, active } = req.body;
  if (!full_name) {res.status(400).json("full_name is required")};
  if (!email) {res.status(400).json("email is required")};
  const data = await Users.create({ date_of_birth, full_name, address, phone, email, active });
  res.send(data);
};

const updateData = async (req, res) => {
  const { date_of_birth, full_name, address, phone, email, active } = req.body;
  const data = await Users.findOne({
    where: { id: req.params.full_name },
  });
  data.set({ date_of_birth, full_name, address, phone, email, active });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await Users.findOne({
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
