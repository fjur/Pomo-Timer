const updateClock = (endTime, timeInterval) => {
  var t = getRemainingTime(endTime);
  if (t.total <= 0) {
    clearInterval(timeInterval);
  }

  return t;
};

const getRemainingTime = (endTime) => {
  var t = Date.parse(endTime) - Date.now();
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / 1000 / 60 / 60 % 24);
  var days = Math.floor(t / 1000 / 60 / 60 / 24);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

const initializeClock = (endTime, timeInterval) => {

  var remainingTime = updateClock(endTime, timeInterval);
  // var intervalId
  var intervalId = setInterval(updateClock.bind(this, endTime, timeInterval), 1000);

  return {
    time: remainingTime,
    intervalId: intervalId
  }
};

export default initializeClock;