/// Note: Run 4 Times to see step by step results

const problem2 = require('../problem2');
const fs = require('fs');

const filePath = 'data/lipsum.txt';

const readFile = (filePath, type) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.log(err);
    else convert(data, type);
  });
};

const convert = (data, type) => {
  switch (type) {
    case 'uppercase':
      writeAndStore(data.toUpperCase(), 'uppercase.txt');
      break;
    case 'lowercaseAndSplit':
      writeAndStore(
        data.toLowerCase().split('\n').join('').split('.').join(''),
        'lowercaseAndSplit.txt'
      );
      break;
    case 'sort':
      writeAndStore(data.split(',').sort().join(''), 'sort.txt');
      break;
    default:
      console.log(type);
      break;
  }
};
const writeAndStore = (data, filename) => {
  fs.writeFile(filename, data, (err) => {
    if (err) console.log(err);
  });

  fs.appendFile('filenames.txt', filename + ' ', (err) => {
    if (err) console.log(err);
  });
};

problem2(filePath, readFile, writeAndStore);
