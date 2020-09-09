import emitter from './EventEmitter/MyEventEmitter.js';
import timerConstants from './EventEmitter/eventsConstants.js'
import audioSRCConstants from './Audio/audioSRCConstants.js'

const player = document.getElementById('player');

emitter.on(timerConstants.start_training, () => {
  player.src = audioSRCConstants.start_training;
  player.play();
})

emitter.on(timerConstants.last_five_seconds, () => {
  player.src = audioSRCConstants.last_five_seconds;
  player.play();
})

emitter.on(timerConstants.end_training, () => {
  player.src = audioSRCConstants.end_training;
  player.play();
})

emitter.on(timerConstants.rest, () => {
  player.src = audioSRCConstants.rest;
  player.play();
})

emitter.on(timerConstants.long_rest, () => {
  player.src = audioSRCConstants.long_rest;
  player.play();
})