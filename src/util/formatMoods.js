'use strict';

const formatMood = (mood) => {
  const formattedMood = JSON.parse(JSON.stringify(mood));

  formattedMood.formattedDateTitle = formatMoodDateTitle(mood);
  formattedMood.formattedDateBody = formatMoodDateBody(mood);
  formattedMood.formattedTime = formatMoodTime(mood);

  return formattedMood;
};

const formatMoods = (moodList) => {
  const formattedMoodList = [];

  for (let mood of moodList) {
    const formattedMood = formatMood(mood);
    formattedMoodList.push(formattedMood);
  }

  return formattedMoodList;
};

const formatMoodDateTitle = (mood) => {
  const moodDateObject = new Date(mood.dateTime);

  const year = moodDateObject.getFullYear().toString().padStart(4, '0');
  const month = (moodDateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = moodDateObject.getDate().toString().padStart(2, '0');

  const monthList = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'semptember',
    'october',
    'november',
    'december',
  ];

  return `${monthList[month - 1]} ${day}, ${year}`;
};

const formatMoodDateBody = (mood) => {
  const moodDateObject = new Date(mood.dateTime);

  const year = moodDateObject.getFullYear().toString().padStart(4, '0');
  const month = (moodDateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = moodDateObject.getDate().toString().padStart(2, '0');

  return `${day}.${month}.${year}`;
};

const formatMoodTime = (mood) => {
  const moodDateObject = new Date(mood.dateTime);

  let hours = moodDateObject.getHours();
  const minutes = moodDateObject.getMinutes().toString().padStart(2, '0');
  const seconds = moodDateObject.getSeconds().toString().padStart(2, '0');

  let amPm = 'am';

  if (hours === 12) {
    amPm = 'pm';
  } else if (hours > 12) {
    hours -= 12;
    amPm = 'pm';
  }

  return hours.toString().padStart(2, '0') + ':' + minutes + ':' + seconds + amPm;
};

module.exports = { formatMood, formatMoods };
