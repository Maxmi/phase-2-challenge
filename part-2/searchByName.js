const fs = require('fs');
const name = process.argv[2];

const rawData = fs.readFileSync('clients.json');

let obj = JSON.parse(rawData);


console.log('Finding clients with name ' + name + '...');

console.log(obj[0].id, obj[0].rep_name);
