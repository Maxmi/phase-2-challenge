const fs = require('fs');
const rawData = fs.readFileSync('clients.json');

let obj = JSON.parse(rawData);
let selectedData = [];
let searchName = process.argv[2];
if(searchName.charAt(0).toLowerCase() === searchName.charAt(0)) {
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
}

for(var i = 0; i < obj.length; i++) {
  if(obj[i].rep_name.startsWith(searchName)){
    selectedData.push({
      id: obj[i].id,
      rep_name: obj[i].rep_name
    });
  }
}

console.log(`Finding clients with name ${searchName} ...`);
console.log(selectedData);
