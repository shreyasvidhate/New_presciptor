const express = require('express');
const router = express.Router();

const {
  getPatient,
  createPatient,
  updatePatient,
} = require('../controllers/patients');

router.route('/').post(createPatient);
router.route('/:name').get(getPatient).patch(updatePatient);

module.exports = router;
