const fs = require('fs');
const state = process.argv[2];
const rawData = fs.readFileSync('clients.json');

let repList = JSON.parse(rawData);
let selectedData = [];

if (state) {
  for (var i = 0; i < repList.length; i++) {
    const item = repList[i];
    if (item.state === state) {
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
    console.log(`Finding clients in state ${state} ...`);
    console.log(selectedData);
  } else {
    console.log(`No data found for state ${state}`);
  }
} else {
  console.log('Please provide state name');
}
