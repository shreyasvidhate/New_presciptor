const express = require('express');
const router = express.Router();

const { getAllPrescriptions } = require('../controllers/prescription');

router.route('/').get(getAllPrescriptions);
module.exports = router;
