import emitter from './EventEmitter/MyEventEmitter.js';
import timerConstants from './EventEmitter/eventsConstants.js'
import audioSRCConstants from './Audio/audioSRCConstants.js'

const player = document.getElementById('player');

function startTraining() {
  player.src = audioSRCConstants.start_training;
  player.play();
}

function lastFiveSeconds() {
  player.src = audioSRCConstants.last_five_seconds;
  player.play();
}

function endTraining() {
  player.src = audioSRCConstants.end_training;
  player.play();
}

function rest() {
  player.src = audioSRCConstants.rest;
  player.play();
}

function longRest(){
  player.src = audioSRCConstants.long_rest;
  player.play();
}

emitter.on(timerConstants.start_training, startTraining);
emitter.on(timerConstants.last_five_seconds, lastFiveSeconds);
emitter.on(timerConstants.end_training, endTraining);
emitter.on(timerConstants.rest, rest);
emitter.on(timerConstants.long_rest, longRest);