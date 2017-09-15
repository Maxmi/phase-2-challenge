const fs = require('fs');
const stateFirstWord = process.argv[2];
const stateSecondWord = process.argv[3];
const rawData = fs.readFileSync('clients.json');

let repList = JSON.parse(rawData);
let selectedData = [];
let reState;

if (!stateFirstWord) {
  console.log('Please provide state name');
  return;
}


if (stateFirstWord && stateSecondWord) {
    reState = new RegExp('^' + stateFirstWord + ' ' + stateSecondWord, 'i');
} else {
  reState = new RegExp('^' + stateFirstWord, 'i');
}

if (reState) {
  for (var i = 0; i < repList.length; i++) {
    const item = repList[i];
    if (item.state.match(reState)) {
      selectedData.push({
        id: item.id,
        rep_name: item.rep_name,
        company: item.company,
        city: item.city,
        state: item.state
      });
    }
  }

  if (selectedData.length > 0) {

    console.log(`Finding clients in state ${reState} ...`);
    console.log(selectedData);
  } else {
    console.log(`No data found for state ${reState}.`);
  }
}
