'use strict';

function formatDuration(seconds) {
  var formatted;
  if (seconds === 0) {
    return 'now';
  } else if (seconds > 0 && seconds < 60) {
    formatted = timeParser(seconds, 'second');
  } else if (seconds >= 60 && seconds < 3600) {
    formatted = minuteParser(seconds);
  } else if (seconds >= 3600 && seconds < 86400) {
    formatted = hourParser(seconds);
  } else if (seconds >= 86400 && seconds < 31536000) {
    formatted = dayParser(seconds);
  } else {
    formatted = yearParser(seconds);
  }
  return addAnd(formatted);
}

function addAnd(str) {
  var toArr = str.split('');
  var index = toArr.lastIndexOf(',');
  toArr[index] = ' and';
  return toArr.join('');
}

function yearParser(seconds) {
  var years = Math.floor(seconds / 365 / 24 / 60 / 60);
  var days = seconds - (31536000 * years);
  if (days) {
    return timeParser(years, 'year') + ', ' + dayParser(days);
  } else {
    return timeParser(years, 'year');
  }
}

function dayParser(seconds) {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hours = seconds - (86400 * days);
  if (hours) {
    return timeParser(days, 'day') + ', ' + hourParser(hours);
  } else {
    return timeParser(days, 'day');
  }
}

function hourParser(seconds) {
  var hours = Math.floor(seconds / 60 / 60);
  var minutes = seconds - (3600 * hours);
  if (minutes) {
    return timeParser(hours, 'hour') + ', ' + minuteParser(minutes);
  } else {
    return timeParser(hours, 'hour');
  }
}

function minuteParser(seconds) {
  var remainder = seconds % 60;
  if (remainder) {
    return timeParser(Math.floor(seconds/60), 'minute') + ', ' + timeParser(seconds % 60, 'second');
  } else {
    return timeParser(Math.floor(seconds/60), 'minute');
  }
}

function timeParser(amount, unit) {
  if (amount === 1) {
    return amount + ' ' + unit;
  } else {
    return amount + ' ' + unit + 's';
  }
}

console.log(formatDuration(1)); // '1 second'
console.log(formatDuration(62)); // '1 minute and 2 seconds'
console.log(formatDuration(120)); // '2 minutes'
console.log(formatDuration(3600)); // '1 hour'
console.log(formatDuration(3662)); // '1 hour, 1 minute and 2 seconds'
console.log(formatDuration(15731080)); // '182 days, 1 hour, 44 minutes and 40 seconds'
console.log(formatDuration(132030240)); // '4 years, 68 days, 3 hours and 4 minutes'
