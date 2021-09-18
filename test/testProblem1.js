const { createDir, makeFile, deletFile, deleteDir } = require('../problem1');

const runAll = () => {
  const dirPath = 'randomDir';

  createDir(dirPath)
    .then(() => console.log(`Directory Created: ${dirPath}`))
    .catch((err) => console.log(err));

  for (let i = 0; i < 10; i++) {
    makeFile(dirPath, i)
      .then(() => console.log(`Created and Write into file: random${i}.json`))
      .catch((err) => console.log(err));
  }

  for (let i = 0; i < 10; i++) {
    deletFile(dirPath, i)
      .then(() => console.log(`File Deleted: random${i}.json`))
      .catch((err) => console.log(err));
  }

  deleteDir(dirPath)
    .then(() => console.log(`Directory Deleted: ${dirPath}`))
    .catch((err) => console.log(err));
};

runAll();
