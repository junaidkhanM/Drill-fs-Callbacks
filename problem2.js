const fs = require('fs').promises;

const readFiles = (filePath) => {
  return fs.readFile(filePath, 'utf-8');
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
  fs.writeFile(filename, data).catch((err) => console.log(err));

  fs.appendFile('filenames.txt', filename + ' ').catch((err) =>
    console.log(err)
  );
};

module.exports = { readFiles, convert };
