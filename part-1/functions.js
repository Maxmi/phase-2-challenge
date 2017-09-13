// Show a weekday
function weekday(date) {
  if(!date) {
    return 'Date object not provided';
  }
  const dayAsNum = date.getDay();
  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  return weekdays[dayAsNum];
}

// Get a snippet from text
function snippet(string, maxlength) {
  if(!string || !maxlength) {
    return 'Insufficient data';
  }
  if (string.length > maxlength) {
    return `${string.slice(0, maxlength)}...`;
  }
  return string;
}

// Get number of object properties
function numProps(obj) {
  if(!obj) {
    return 'Object not provided';
  }
  var counter = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      counter++;
    }
  }
  return counter;
}

// Filter between
function filterBetween(array, min, max) {
  if(!array || !min || !max) {
    return ('Data not provided');
  }
  if(array.length > 0) {
    return array.filter((value) => value >= min && value <= max);
  }
  return array;
}


module.exports = { weekday, snippet, numProps, filterBetween };
