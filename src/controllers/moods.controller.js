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

module.exports = { getAllMoodsController, getTodayMoodsController };
