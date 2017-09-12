//if you want to replace these functions with new ones - don't delete these
//just comment them or save somewhere

// Show a weekday
function weekday(date) {
  try {
    const dayAsNum = date.getDay();
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dayAsWord = weekdays[dayAsNum];
    return dayAsWord;
  }
  catch(e) {
    return 'Date object not provided';
  }

}

// function weekday(date) {
//   const dayAsNum = date.getDay();
//   const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//   return weekdays[dayAsNum];
// }

// Get a snippet from text
function snippet(string, maxlength) {
  try {
    if (string.length > maxlength) {
      return string.slice(0, maxlength) + '...';
    } else {
      return string;
    }
  } catch (e) {
    return 'Data not provided';
  }
}

// function snippet(string, maxlength) {
//   if(string.length > maxlength) {
//     let modifiedStr = string.slice(0, maxlength) + '...';
//     return modifiedStr;
//   } else {
//     return string;
//   }
// }


// Get number of object properties
function numProps(obj) {
  try {
      return Object.keys(obj).length;
  } catch (e) {
    return 'Data not provided';
  }
}
// function numProps(obj) {
//   return Object.keys(obj).length;
// }


// Filter between
function filterBetween(array, min, max) {
  try {
    if(array.length > 0) {
      return array.filter((value) => value >= min && value <= max);
    }
  }
  catch(e){
    return ('Data not provided');
  }
}

// function filterBetween(array, min, max) {
//   return array.filter((value) => value >= min && value <= max);
// }

module.exports = { weekday, snippet, numProps, filterBetween };
