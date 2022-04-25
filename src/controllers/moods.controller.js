'use strict';

const mongoose = require('mongoose');
const moodsService = require('../services/moods.service');
const validateInput = require('../util/validateInput');

// 📌 get ALL

const getAllMoodsController = async (req, res) => {
  const allMoods = await moodsService.getAllMoodsService();
  res.send(allMoods);
};

// 📌 get TODAY

const getTodayMoodsController = async (req, res) => {
  const todayMoods = await moodsService.getTodayMoodsService();
  res.send(todayMoods);
};

// 📌 get BY ID

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

// 📌 ADD

const addMoodController = async (req, res) => {
  const moodBody = req.body;
  const validMood = validateInput(moodBody);
  if (!validMood) {
    return res.status(400).send({ message: 'mood INVALID', icon: '' });
  }

  const newMood = await moodsService.addMoodService(moodBody);
  res.status(201).send({ message: 'mood CREATED', icon: '' });
};

// 📌 UPDATE

const updateMoodController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'invalid ID', icon: '' });
    return;
  }

  const moodUpdate = req.body;
  const validMood = validateInput(moodUpdate);

  if (!validMood) {
    return res.status(400).send({ message: 'mood INVALID', icon: '' });
  }

  const updatedMood = await moodsService.updateMoodService(idParam, moodUpdate);

  if (!updatedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }
  res.status(200).send({ message: 'mood UPDATED', icon: '' });
};

module.exports = {
  getAllMoodsController,
  getTodayMoodsController,
  getMoodByIdController,
  addMoodController,
  updateMoodController,
};
