const fs = require('fs');

function writeToFile(filename, content) {
    fs.writeFileSync(filename, content, 'utf-8');
  }
  
  module.exports = {
    writeToFile
  };