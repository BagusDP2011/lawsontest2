const MasterStatus = require("../models/MasterStatus");

const getData = async (req, res) => {
  const data = await MasterStatus.findAll({});
  if (!data) throw new Error("name is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await MasterStatus.findOne({ where: { id: req.params.id } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {res.status(400).json("name is required")};
  if (!description) {res.status(400).json("description is required")};
  const data = await MasterStatus.create({ name, description });
  res.send(data);
};

const updateData = async (req, res) => {
  const { name, description } = req.body;
  const data = await MasterStatus.findOne({
    where: { id: req.params.user_id },
  });
  data.set({ name, description });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  const data = await MasterStatus.findOne({
    where: { id: req.params.user_id },
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
