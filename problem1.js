const fs = require('fs');

const problem1 = (dirPath, cb) => {
  const isExist = fs.existsSync(dirPath);
  if (!isExist) {
    fs.mkdir(dirPath, (err) => {
      if (err) console.log(err);
    });
  }

  for (let index = 0; index < 10; index++) {
    cb(dirPath, index);
  }
};
module.exports = problem1;
