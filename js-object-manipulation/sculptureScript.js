const sculptureList = require('./data.js'); // import data.js

let index = 0;
function showSculpture() {
  const sculpture = sculptureList[index];
  console.log(`Name: ${sculpture.name}`);
  console.log(`Artist: ${sculpture.artist}`);
  console.log(`Description: ${sculpture.description}`);
  console.log(`Image URL: ${sculpture.url}`);
}
showSculpture();


let sculptureListLengths = [];

sculptureList.forEach((sculpture) => {
  const lengths = {};
  for (let key in sculpture) {
    lengths[key] = sculpture[key].length;
  }
  sculptureListLengths.push(lengths);
});

console.log(sculptureListLengths[0]);
