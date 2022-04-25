'use strict';

const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const mood = req.body;

  const validateForEmpty =
    mood.mood_id.length === 0 || !mood.icon || !mood.dateTime || !mood.createdat;

  const validateMood_id = isNaN(mood.mood_id) || mood.mood_id < 0 || mood.mood_id > 6;

  const validateDateTime = mood.dateTime.length !== 19;

  const validateCreatedat = mood.createdat.length !== 14;

  if (!mood || validateForEmpty || validateMood_id || validateDateTime || validateCreatedat) {
    return res.status(400).send({ message: 'mood INVALID', icon: '' });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
