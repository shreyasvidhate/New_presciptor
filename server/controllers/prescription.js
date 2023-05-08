const Prescription = require('../models/Prescription');
const Drug = require('../models/Drug');
const mongoose = require('mongoose');

const getAllPrescriptions = async (req, res) => {
  const { prescriptions } = req.body;
  const prescriptionArr = [];
  for (const prescriptionId of prescriptions) {
    const prescription = await Prescription.findById(prescriptionId);
    const drugs = [];
    for (const drugId of prescription.drugs) {
      const drug = await Drug.findById(drugId);
      const { name, strength, preparation_type, route, frequency } = drug;
      drugs.push({ name, strength, preparation_type, route, frequency });
    }
    prescriptionArr.push({ id: prescription._id, drugs });
  }
  res.status(200).json(prescriptionArr);
};

module.exports = { getAllPrescriptions };
