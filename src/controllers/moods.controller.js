'use strict';

const moodsService = require('../services/moods.service');

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
  const chosenMood = await moodsService.getMoodByIdService(idParam);

  if (!chosenMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }

  res.send(chosenMood);
};

// 📌 ADD

const addMoodController = async (req, res) => {
  const moodBody = req.body;

  const newMood = await moodsService.addMoodService(moodBody);
  res.status(201).send({ message: 'mood CREATED', icon: '' });
};

// 📌 UPDATE

const updateMoodController = async (req, res) => {
  const idParam = req.params.id;
  const moodUpdate = req.body;

  const updatedMood = await moodsService.updateMoodService(idParam, moodUpdate);

  if (!updatedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }

  res.status(200).send({ message: 'mood UPDATED', icon: '' });
};

// 📌 DELETE

const deleteMoodController = async (req, res) => {
  const idParam = req.params.id;

  const deletedMood = await moodsService.getMoodByIdService(idParam);

  if (!deletedMood) {
    res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
    return;
  }

  await moodsService.deleteMoodService(idParam);

  res.status(200).send({ message: 'mood DESTROYED', icon: '' });
};

module.exports = {
  getAllMoodsController,
  getTodayMoodsController,
  getMoodByIdController,
  addMoodController,
  updateMoodController,
  deleteMoodController,
};
