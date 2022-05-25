let digits = '';
const fs = require('fs');
module.exports = (request, response) => {
  let search = request.params.digits;
  const index = indexOf(digits, search);
    if (index-1 > 0) {
        response.send(`this digit (${search}) is found at ${index - 1}th digit of pi`);
    } else {
      response.send(`not found in the first million digits`);
    }
}
const path = require('path');

const coolPath = path.join(__dirname, 'million.txt');
const stream = fs.createReadStream(coolPath);
//const stream = fs.createReadStream('./million.txt');

stream.on('data', chunk => {
  digits += chunk;
});

function indexOf(txt, search) {
  let start = search.charAt(0);
  for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i) === start) {
      let found = true;
      for (let j = 1; j < search.length; j++) {
        if (txt.charAt(i + j) !== search.charAt(j)) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
  }
  return -1;
}

stream.on('end', () => {
  console.log('million digits loaded {PEEK_IN_PI}');
});
