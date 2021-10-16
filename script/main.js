function doAsync(value) {
    return new Promise(function(resolve, reject) {
      console.log("[doAsync] in promise code");
      if (value) {
        setTimeout(function() {
          console.log("[doAsync] resolving...");
          resolve(getAnotherPromise(false));
        }, 2000);
      } else {
        setTimeout(function() {
          console.log("[doAsync] rejecting...");
          reject("rejected");
        }, 2000);
      }
    });
  }
  
  function getAnotherPromise(value) {
    return new Promise(function(resolve, reject) {
      console.log("[getAnotherPromise] in promise code");
      if (value) {
        setTimeout(function() {
          console.log("[getAnotherPromise] resolving...");
          resolve("resolved");
        }, 2000);
      } else {
        setTimeout(function() {
          console.log("[getAnotherPromise] rejecting...");
          reject("rejected");
        }, 2000);
      }
    });
  }
  
  doAsync(true)
    .then(data => {
      console.log("yes go: " + data);
    })
    .catch(error => {
      console.log("no go: " + error);
    });
  