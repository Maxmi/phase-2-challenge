const fs = require('fs');
const state = process.argv[2];
const rawData = fs.readFileSync('clients.json');

let obj = JSON.parse(rawData);
let selectedData = [];

if (state) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].state === state) {
      selectedData.push({
        id: obj[i].id,
        rep_name: obj[i].rep_name,
        company: obj[i].company,
        city: obj[i].city,
        state: obj[i].state
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
