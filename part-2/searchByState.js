const fs = require('fs');
const state = process.argv[2];
const rawData = fs.readFileSync('clients.json');

let obj = JSON.parse(rawData);
let selectedData = [];

for(var i = 0; i < obj.length; i++) {
  if(obj[i].state === state) {
    selectedData.push({
      id: obj[i].id,
      rep_name: obj[i].rep_name,
      company: obj[i].company,
      city: obj[i].city,
      state: obj[i].state
    });
  }
}

console.log(`Finding clients in state ${state} ...`);
console.log(selectedData);
