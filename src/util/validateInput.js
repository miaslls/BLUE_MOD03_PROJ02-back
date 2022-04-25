'use strict';

const validateInput = (mood) => {
  const validateForEmpty =
    mood.mood_id.length === 0 || !mood.icon || !mood.dateTime || !mood.createdat;

  const validateMood_id = isNaN(mood.mood_id) || mood.mood_id < 0 || mood.mood_id > 6;

  const validateDateTime = mood.dateTime.length !== 19;

  const validateCreatedat = mood.createdat.length !== 14;

  if (!mood || validateForEmpty || validateMood_id || validateDateTime || validateCreatedat) {
    return false;
  } else {
    return true;
  }
};

module.exports = validateInput;
