'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('/all', moodsController.getAllMoodsController);
router.get('/today', moodsController.getTodayMoodsController);

module.exports = router;
