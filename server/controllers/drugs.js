const Drug = require('../models/Drug');

const getDrug = async (req, res) => {
  const { name } = req.params;
  const drug = await Drug.findOne({ name });
  if (!drug) {
    throw new Error(`There is no drug with name ${drug}`);
  }

  res.status(200).json(drug);
};

const createDrug = async (req, res) => {
  const drug = await Drug.create(req.body);
  res.status(200).json(drug);
};

module.exports = { getDrug, createDrug };
