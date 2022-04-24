'use strict';

const Mood = require('../models/Mood');

const getAllMoodsService = async () => {
  const moods = await Mood.find();
  return moods;
};

// const findPaletasService = async () => {
//     const paletas = await Paleta.find();
//     return paletas;
//   };

// const getAllMoodsService = () => {
//     formatMoods(moods);
//     sortMoods(moods);
//     return moods;
//   };

module.exports = { getAllMoodsService };
