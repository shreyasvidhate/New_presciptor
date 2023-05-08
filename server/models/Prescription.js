const mongoose = require('mongoose');
const prescriptionSchema = new mongoose.Schema({
  drugs: [
    {
      type: String,
      required: true,
    },
  ],
});
const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
