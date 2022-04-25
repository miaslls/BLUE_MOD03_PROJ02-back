'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('/all', moodsController.getAllMoodsController);
router.get('/today', moodsController.getTodayMoodsController);
router.get('/:id', moodsController.getMoodByIdController);

router.post('/add', moodsController.addMoodController);
router.put('/update/:id', moodsController.updateMoodController);
router.delete('/delete/:id', moodsController.deleteMoodController);

module.exports = router;
