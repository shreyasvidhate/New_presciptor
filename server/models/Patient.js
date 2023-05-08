const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  mobileNo: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  bloodgroup: {
    type: String,
    required: false,
  },
  BP: {
    type: String,
    required: false,
  },
  SpO2: {
    type: String,
    required: false,
  },
  Pulse: {
    type: String,
    required: false,
  },
  option: {
    option1: Boolean,
    option2: Boolean,
    option3: Boolean,
    option4: Boolean,
    option5: Boolean,
    option6: Boolean,
    option7: Boolean,
    option8: Boolean,
    option9: Boolean,
    option10: Boolean,
    option11: Boolean,
    option12: Boolean,
    option13: Boolean,
    option14: Boolean,
    option15: Boolean,
    option16: Boolean,
    option17: Boolean,
    option18: Boolean,
    option19: Boolean,
    option20: Boolean,
    option21: Boolean,
    option22: Boolean,
  },
  currentDrugs: {
    type: String,
    required: false,
  },
  menstrualHistory: {
    type: String,
    required: false,
  },
  Vata: {
    type: String,
    required: false,
  },
  Pitta: {
    type: String,
    required: false,
  },
  Kapha: {
    type: String,
    required: false,
  },
  VyadhiAvastha: {
    type: String,
    required: false,
  },
  Nidra: {
    type: String,
    required: false,
  },
  Manas: {
    type: String,
    required: false,
  },
  Agni: {
    type: String,
    required: false,
  },
  Mala: {
    type: String,
    required: false,
  },
  Mutra: {
    type: String,
    required: false,
  },
  Vyayama: {
    type: String,
    required: false,
  },
  prescriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Prescription',
      required: true,
    },
  ],
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
