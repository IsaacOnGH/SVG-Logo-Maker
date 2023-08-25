const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function getUserInput(prompt) {
    return new Promise((resolve) => {
      readline.question(prompt, (input) => {
        resolve(input);
      });
    });
  }
  
  module.exports = {
    getUserInput
  };