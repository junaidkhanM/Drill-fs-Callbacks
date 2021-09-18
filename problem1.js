const fs = require('fs').promises;
const path = require('path');

const createDir = (dirPath) => {
  return fs.mkdir(dirPath);
};

const makeFile = (dirPath, n) => {
  return fs.writeFile(
    path.join(dirPath, `random${n}.json`),
    `Hello from random${n}.json`
  );
};

const deletFile = (dirPath, n) => {
  return fs.unlink(path.join(dirPath, `random${n}.json`));
};

const deleteDir = (dirPath) => {
  return fs.rmdir(dirPath);
};

module.exports = { createDir, makeFile, deletFile, deleteDir };
