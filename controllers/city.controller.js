const City = require("../models/City");

const getData = async (req, res) => {
  const data = await City.findAll({});
  if (!data) throw new Error("City is not found");
  res.send(data);
};

const getSpecificData = async (req, res) => {
  const data = await City.findOne({ where: { id: req.params.id } });
  if (!data) {return res.status(400).json("Data not found")};
  res.send(data);
};

const addData = async (req, res) => {
  const { name, longitude, latitude } = req.body;
  if (!name) {res.status(400).json("name is required")};
  const data = await City.create({ name, longitude, latitude });
  res.send(data);
};

const updateData = async (req, res) => {
  const { name, longitude, latitude } = req.body;
  const data = await City.findOne({
    where: { id: req.params.id },
  });
  data.set({ name, longitude, latitude });
  await data.save();
  res.status(200).send(data);
};

const deleteData = async (req, res) => {
  console.log(req.params.id);
  const data = await City.findOne({
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
