(function() {
  function run() {
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve(run());
      }, 0);

    })
  }
  run();
})();

console.log(`PID:${process.pid}`);