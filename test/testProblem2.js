/// Note: Run 4 Times to see step by step results

const { readFiles, convert } = require('../problem2');
const fs = require('fs').promises;

const filePath = 'data/lipsum.txt';

const runAll = () => {
  readFiles(filePath)
    .then((data) => {
      convert(data, 'uppercase');
      readFiles('uppercase.txt').then((data) => {
        convert(data, 'lowercaseAndSplit');
        readFiles('lowercaseAndSplit.txt').then((data) => {
          convert(data, 'sort');
          fs.readFile('filenames.txt', 'utf-8').then((data) => {
            let fileName = data.split(' ');
            for (let index = 0; index < fileName.length; index++) {
              fs.unlink(fileName[index]);
            }
            fs.unlink('filenames.txt');
          });
        });
      });
    })
    .catch((err) => console.log(err));
};

runAll();
