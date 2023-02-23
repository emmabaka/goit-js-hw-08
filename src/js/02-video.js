import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function updateTime(key) {
  try {
    const time = localStorage.getItem(key);
    if (time === null) {
      return undefined;
    } else {
      return JSON.parse(time).seconds;
    }
  } catch (error) {
    console.log(error.message);
  }
}

player
  .setCurrentTime(updateTime('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));
  }, 1000)
);
