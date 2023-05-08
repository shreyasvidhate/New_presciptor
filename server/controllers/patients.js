const Patient = require('../models/Patient');
const Prescription = require('../models/Prescription');
const mongoose = require('mongoose');

const getPatient = async (req, res) => {
  const { name } = req.params;

  const patient = await Patient.findOne({
    name,
  });

  if (!patient) {
    throw new Error(`There is no patient with name ${Patient}`);
  }
  req.patient = patient;

  res.status(200).json(patient);
};

// const createPatient = async (req, res) => {
//   const patient = await Patient.create(req.body);
//   res.status(200).json({ patient });
// };
const createPatient = async (req, res) => {
  const { drugs } = req.body;

  if (drugs.length != 0) {
    const prescription = await Prescription.create({ drugs });
    req.body.prescriptions = [];
    req.body.prescriptions.push(prescription._id);
  }

  delete req.body.drugs;

  let patient = await Patient.create(req.body);

  res.status(200).json({
    patient,
  });
};

const updatePatient = async (req, res) => {
  const { name } = req.params;
  const { drugs } = req.body;
  if (drugs.length != 0) {
    const prescription = await Prescription.create({ drugs });
    req.body.prescriptions.push(prescription._id);
  }

  delete req.body.drugs;
  const patient = await Patient.findOneAndUpdate({ name }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!patient) {
    throw new NotFoundError(`No patient with name ${patient}`);
  }
  res.status(200).json({ patient });
};

module.exports = {
  getPatient,
  createPatient,
  updatePatient,
};
