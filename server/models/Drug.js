const mongoose = require('mongoose');
const drugSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  strengthUnit: {
    type: String,
    enum: ['mg', 'gm', 'ng', 'mcg'],
  },
  preparation_type: {
    type: String,
    required: true,
    enum: ['Tab.', 'Cap.', 'Inj.', 'Syr.', 'Drops'],
  },
  route: {
    type: String,
    enum: [
      'Topical',
      'Oral',
      'Rectal',
      'Vaginal',
      'Inhalation',
      'Local',
      'Chew',
      'Intradermal',
      'Subcutaneous',
      'Intramuscular',
      'Intravenous',
      'Nasal',
      'Ear Drops',
      'Eye Drops',
    ],
  },
  Dose: {
    type: String,
    required: false,
  },
  doseUnit: {
    type: String,
    enum: ['ml', 'unit', 'table spoon', 'tea spoon'],
  },
  direction: {
    type: String,
    enum: ['Before Meal', 'After Meal'],
  },
  frequency: {
    type: String,
    enum: [
      'If required',
      'Immediately',
      'Once a day',
      'Twice daily',
      'Thrice daily',
      'Four times a day',
      'Every hour',
      'Every night at bedtime',
      'Every day',
      'Every other day',
      'Every four hours',
      'Once a week',
      'Three times a week',
    ],
  },
  duration: {
    type: String,
    required: false,
  },
  durationUnit: {
    type: String,
    enum: ['hours', 'days', 'weeks', 'years'],
  },
  totalQuantity: {
    type: String,
    required: false,
  },
  otherInstructions: {
    type: String,
    required: false,
  },
});
const Drug = mongoose.model('Drug', drugSchema);
module.exports = Drug;
