const { readFile, writeFile } = require('fs');
console.log('start');
// NEED TO PROVIDE A CALLBACK
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done with this task');
      }
    );
  });
});
console.log('starting next task');

// ASYNC MEANS THE MOMENT WE START THE TASK WE OFFLOAD THE TASK AND MOVE ON TO THE NEXT WHEREAS SYNC RUNS LINE BY LINE
