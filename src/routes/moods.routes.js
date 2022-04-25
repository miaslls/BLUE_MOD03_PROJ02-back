'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');
const { validId, validObjectBody } = require('../middlewares/mood.middleware');

router.get('/all', moodsController.getAllMoodsController);
router.get('/today', moodsController.getTodayMoodsController);
router.get('/:id', validId, moodsController.getMoodByIdController);

router.post('/add', validObjectBody, moodsController.addMoodController);
router.put('/update/:id', validId, validObjectBody, moodsController.updateMoodController);
router.delete('/delete/:id', validId, moodsController.deleteMoodController);

module.exports = router;
