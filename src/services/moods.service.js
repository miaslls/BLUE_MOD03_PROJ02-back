'use strict';

const Mood = require('../models/Mood');
const { formatMood, formatMoods } = require('../util/formatMoods');
const sortMoods = require('../util/sortMoods');
const getDateToday = require('../util/getDateToday');

const getAllMoodsService = async () => {
  const allMoods = await Mood.find();
  const moods = formatMoods(allMoods);
  sortMoods(moods);
  return moods;
};

const getTodayMoodsService = async () => {
  const todayMoods = await Mood.find();
  const dateToday = getDateToday();
  const todayMoodList = [];

  const moods = formatMoods(todayMoods);

  for (let mood of moods) {
    if (mood.formattedDateBody === dateToday) {
      todayMoodList.push(mood);
    }
  }

  sortMoods(todayMoodList);
  return todayMoodList;
};

module.exports = { getAllMoodsService, getTodayMoodsService };
