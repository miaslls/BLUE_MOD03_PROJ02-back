'use strict';

const sortMoods = (moodList) => {
  for (let mood of moodList) {
    const moodDateObject = new Date(mood.dateTime);

    const year = moodDateObject.getFullYear().toString().padStart(4, '0');
    const month = (moodDateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = moodDateObject.getDate().toString().padStart(2, '0');
    const hours = moodDateObject.getHours().toString().padStart(2, '0');
    const minutes = moodDateObject.getMinutes().toString().padStart(2, '0');
    const seconds = moodDateObject.getSeconds().toString().padStart(2, '0');

    mood.timestamp = Number(year + month + day + hours + minutes + seconds);
  }

  moodList.sort((a, b) => b.timestamp - a.timestamp);
};

module.exports = sortMoods;
