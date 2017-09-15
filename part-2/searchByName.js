const fs = require('fs');
const rawData = fs.readFileSync('clients.json');
const reSearchName = new RegExp('^' + process.argv[2], 'i');
let repList = JSON.parse(rawData);
let selectedData = [];

if (reSearchName) {
  for (var i = 0; i < repList.length; i++) {
    const item = repList[i];
    if (item.rep_name.match(reSearchName)) {
      selectedData.push({
        id: item.id,
        rep_name: item.rep_name
      });
    }
  }
  if (selectedData.length > 0) {
    console.log(`Finding clients with name ${reSearchName} ...`)
    console.log(selectedData);
  } else {
    console.log(`No data found for the name ${reSearchName}`);
  }
} else {
  console.log('Please provide search name');
}
