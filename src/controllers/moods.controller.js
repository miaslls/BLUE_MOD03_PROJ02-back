'use strict';

const moodsService = require('../services/moods.service');

const getAllMoodsController = async (req, res) => {
  const allMoods = await moodsService.getAllMoodsService();
  res.send(allMoods);
};

const getTodayMoodsController = async (req, res) => {
  const todayMoods = await moodsService.getTodayMoodsService();
  res.send(todayMoods);
};

const getMoodByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'invalid ID', icon: '' });
    return;
  }

  const chosenMood = await moodsService.getMoodByIdService(idParam);

  if (!chosenMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }

  res.send(chosenMood);
};

module.exports = { getAllMoodsController, getTodayMoodsController, getMoodByIdController };
