const fs = require('fs');

const problem2 = (filePath, readConvertWrite) => {
  readConvertWrite(filePath, 'uppercase');
  fs.exists('uppercase.txt', (exist) => {
    if (exist) readConvertWrite('uppercase.txt', 'lowercaseAndSplit');
  });
  fs.exists('lowercaseAndSplit.txt', (exist) => {
    if (exist) readConvertWrite('lowercaseAndSplit.txt', 'sort');
  });

  fs.exists('sort.txt', (exist) => {
    if (exist) {
      fs.readFile('filenames.txt', 'utf-8', (err, data) => {
        if (err) console.log(err);
        else {
          let fileName = data.split(' ');
          for (let index = 0; index < fileName.length; index++) {
            fs.exists(fileName[index], (exist) => {
              if (exist) {
                fs.unlink(fileName[index], (err) => {
                  if (err) console.log(err);
                });
              }
            });
          }
        }
      });
    }
  });
};

module.exports = problem2;
