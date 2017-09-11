// Show a weekday
function weekday(date) {
  const weekday = date.getDay();
  const dayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];
  return dayNames[weekday];
}

// Get a snippet from text
function snippet(string, maxlength) {
  if(string.length > maxlength) {
    let modifiedStr = string.slice(0, maxlength) + '...';
    return modifiedStr;
  } else {
    return string;
  }
}


// Get number of object properties
function numProps(obj) {
  return Object.keys(obj).length;
}


// Filter between
function filterBetween(array, min, max) {
  return array.filter((value) => value >= min && value <= max);
}

module.exports = { weekday, snippet, numProps, filterBetween };
