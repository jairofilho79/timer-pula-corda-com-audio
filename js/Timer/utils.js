export function timeFormatter(time) {
  //time is in seconds.
  function getZeros(time) {
    const treatedTime = Math.floor(time);
    let formattedTime = ''
    if(treatedTime < 10) {
      formattedTime += '0';
    }
    if( treatedTime < 0) {
      formattedTime += '0';
    } else {
      formattedTime += treatedTime;
    }
    return formattedTime;
  }
  const hours = time/3600;
  const hoursFormatted = getZeros(hours);
  const minutes = (hours - Math.floor(hours)) * 60;
  const minutesFormatted = getZeros(minutes);
  const seconds = (minutes - Math.floor(minutes)) * 60;
  const secondsFormatted = getZeros(seconds);

  return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}