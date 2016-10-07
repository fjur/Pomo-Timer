// const getRemainingTime = (endTime) => {
//   var t = Date.parse(endTime) - Date.now();
//   var seconds = Math.floor(t / 1000 % 60);
//   var minutes = Math.floor(t / 1000 / 60 % 60);
//   var hours = Math.floor(t / 1000 / 60 / 60 % 24);
//   var days = Math.floor(t / 1000 / 60 / 60 / 24);

//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// const updateClock = (endTime) => {
//   var t = getRemainingTime(endTime);
//   debugger;
//   if (t.total <= 0) {
//     clearInterval(timeInterval);
//   }
// }

const initializeClock = (endTime) => {

  const updateClock = (endTime) => {
    var t = getRemainingTime(endTime);

    //Time Interval is undefined on first run
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  const getRemainingTime = (endTime) => {
  var t = Date.parse(endTime) - Date.now();
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / 1000 / 60 / 60 % 24);
  var days = Math.floor(t / 1000 / 60 / 60 / 24);

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

  updateClock(endTime);
  var timeInterval = setInterval(updateClock(endTime), 1000);
}

export default initializeClock;