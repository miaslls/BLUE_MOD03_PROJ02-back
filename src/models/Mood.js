'use strict';

const mongooose = require('mongoose');

const MoodSchema = new mongooose.Schema({
  mood_id: { type: String, required: true },
  icon: { type: String, required: true },
  text: { type: String, required: false },
  dateTime: { type: String, required: true },
  createdat: { type: String, required: true },
});

const Mood = mongooose.model('moods', MoodSchema);

module.exports = Mood;
