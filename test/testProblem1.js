const problem1 = require('../problem1');
const fs = require('fs');
const path = require('path');

const makeFile = (dirPath, n) => {
  fs.writeFile(
    path.join(dirPath, `random${n}.json`),
    `Hello from random${n}.json`,
    (err) => {
      if (err) console.log(err);
    }
  );
};

const deletFile = (dirPath, n) => {
  fs.unlink(path.join(dirPath, `random${n}.json`), (err) => {
    if (err) console.log(err);
  });
};

// To create dir and make 10 json files
problem1('randomDir', makeFile);

// To delete all json files from dir
problem1('randomDir', deletFile);
