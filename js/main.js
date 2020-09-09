import Timer from './Timer/Timer.js';

document.addEventListener("DOMContentLoaded", () => {
  const timer = new Timer(document.getElementById('timer'), document.getElementById('rounds'));
  const player = document.getElementById('player');
  const selectors = {
    start: document.getElementById('start'),
    cancel: document.getElementById('cancel'),
    pause: document.getElementById('pause'),
    resume: document.getElementById('resume'),
  }

  function start() {
    updateButtonVisibility({start: false, cancel: true, pause: true, resume: false});
    timer.start();
  }

  function pause() {
    updateButtonVisibility({start: false, cancel: true, pause: false, resume: true});
    player.pause();
    timer.pause();
  }

  function cancel() {
    updateButtonVisibility({start: true, cancel: false, pause: false, resume: false});
    player.pause();
    timer.cancel();
  }

  function resume() {
    updateButtonVisibility({start: false, cancel: true, pause: true, resume: false});
    player.play();
    timer.resume();
  }

  const selectorsCallback = { start, cancel, pause, resume }

  function updateButtonVisibility(params) {
    function getDisplay(isVisible) {
      return isVisible ? 'block' : 'none';
    }
    Object.keys(selectors).forEach(key => {
      selectors[key].style.display = getDisplay(params[key]);
    });
  }

  Object.keys(selectors).forEach(key => {
    selectors[key].addEventListener('click', selectorsCallback[key]);
  });

})