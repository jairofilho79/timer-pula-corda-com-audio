export function twoDigitsString(time) {
  return String(Math.max(0, Math.floor(time))).padStart(2, '0');
}

export function timeFormatter(time) {
  //time is in seconds.
  const hours = time/3600;
  const minutes = (hours - Math.floor(hours)) * 60;
  const seconds = (minutes - Math.floor(minutes)) * 60;

return [hours, minutes, seconds].map(twoDigitsString).join(':');
}