import timerConstansts from './timerConstants.js';
import roundConstansts from './roundConstants.js';
import { timeFormatter } from './utils.js';
import emitter from '../EventEmitter/MyEventEmitter.js';
import eventConstants from '../EventEmitter/eventsConstants.js';

class Timer {

  constructor(timerSelector, roundSelector) {
    this.rounds = roundConstansts.rounds;
    this.currentTime = 0;
    this.timerSelector = timerSelector;
    this.roundSelector = roundSelector;
    this.emitter = emitter;
  }

  start() {
    this.currentTime = timerConstansts.start_time;
    this.updateRoundSelector();
    this.resume();
  }

  emitStartTraining() {
    this.emitter.emit(eventConstants.start_training);
  }

  emitLastFiveSeconds() {
    this.emitter.emit(eventConstants.last_five_seconds);
  }

  emitEndTraining() {
    this.emitter.emit(eventConstants.end_training);
  }

  emitLongRest() {
    this.emitter.emit(eventConstants.long_rest);
  }

  emitRest() {
    this.emitter.emit(eventConstants.rest);
  }

  startTraining() {
    this.currentTime = timerConstansts.training;
    this.emitStartTraining();
    this.startInterval(() => this.nextRound());
  }

  startRest() {
    this.currentTime = timerConstansts.rest;
    this.emitRest();
    this.startInterval(() => this.startTraining());
  }

  startLongRest() {
    this.currentTime = timerConstansts.long_rest;
    this.emitLongRest();
    this.startInterval(() => this.startTraining());
  }

  endTraining() {
    this.emitEndTraining();
  }

  updateRoundSelector() {
    this.roundSelector.innerText = this.rounds;
  }

  updateTimerSelector() {
    this.timerSelector.innerText = timeFormatter(this.currentTime);
  }

  nextRound() {
    this.rounds--;
    this.updateRoundSelector();
    if (this.rounds % roundConstansts.long_rest === 0) {
      this.startLongRest();
    } else if(this.rounds === 0) {
      this.endTraining();
    } else {
      this.startRest();
    }
  }

  startInterval(callback) {
    this.interval = setInterval(() => {
      this.updateTimerSelector();
      this.currentTime--;
      if(this.currentTime === 5) {
        this.emitLastFiveSeconds();
      }
      if(this.currentTime === 0) {
        clearInterval(this.interval);
        if(callback) callback();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  cancel() {
    this.pause();
    this.currentTime = 0;
    this.rounds = roundConstansts.rounds;
    this.updateRoundSelector();
    this.updateTimerSelector();
  }

  resume() {
    this.startInterval(() => this.startTraining());
  }
}

export default Timer;