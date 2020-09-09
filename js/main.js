import Timer from './Timer/Timer.js';

const timer = new Timer(document.getElementById('timer'), document.getElementById('rounds'));
const player = document.getElementById('player');
const selectors = {
  start: document.getElementById('start'),
  cancel: document.getElementById('cancel'),
  pause: document.getElementById('pause'),
  resume: document.getElementById('resume'),
}

function start() {
  updateButtonVisibility(false, true, true, false);
  timer.start();
}

function pause() {
  updateButtonVisibility(false, true, false, true);
  player.pause();
  timer.pause();
}

function cancel() {
  updateButtonVisibility(true, false, false, false);
  player.pause();
  timer.cancel();
}

function resume() {
  updateButtonVisibility(false, true, true, false);
  player.play();
  timer.resume();
}

function updateButtonVisibility(start, cancel, pause, resume) {
  function getDisplay(isVisible) {
    return isVisible ? 'block' : 'none';
  }
  selectors.start.style.display = getDisplay(start);
  selectors.cancel.style.display = getDisplay(cancel);
  selectors.pause.style.display = getDisplay(pause);
  selectors.resume.style.display = getDisplay(resume);
}

Object.keys(selectors).forEach(key => {
  selectors[key].addEventListener('click', eval(key));
});
