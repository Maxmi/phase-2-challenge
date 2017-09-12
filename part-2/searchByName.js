const fs = require('fs');
const rawData = fs.readFileSync('clients.json');

let obj = JSON.parse(rawData);
let selectedData = [];
let searchName = process.argv[2];

if (searchName) {
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].rep_name.startsWith(searchName)) {
      selectedData.push({
        id: obj[i].id,
        rep_name: obj[i].rep_name
      });
    }
  }
  if (selectedData.length > 0) {
    console.log(`Finding clients with name ${searchName} ...`)
    console.log(selectedData);
  } else {
    console.log(`No data found for the name ${searchName}`);
  }
} else {
  console.log('Please provide search name');
}
