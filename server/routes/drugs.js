const express = require('express');
const router = express.Router();

const { getDrug, createDrug } = require('../controllers/drugs');

router.route('/').post(createDrug);
router.route('/:name').get(getDrug);

module.exports = router;
