'use strict';

const moodsService = require('../services/moods.service');

const getAllMoodsController = async (req, res) => {
  const allMoods = await moodsService.getAllMoodsService();
  res.send(allMoods);
};

// const findPaletasController = async (req, res) => {
//     const allPaletas = await paletasService.findPaletasService();
//     res.send(allPaletas);
//   };

//   const getAllMoodsController = (req, res) => {
//     const allMoods = moodsService.getAllMoodsService();
//     res.send(allMoods);
//   };

module.exports = { getAllMoodsController };
