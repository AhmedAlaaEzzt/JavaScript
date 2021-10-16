function doAsync(value) {
    return new Promise(function(resolve, reject) {
      console.log("in promise code");
      if (value) {
        setTimeout(function() {
          console.log("resolving...");
          resolve("resolved");
        }, 2000);
      } else {
        setTimeout(function() {
          console.log("rejecting...");
          reject("rejected");
        }, 2000);
      }
    });
  }
  doAsync(true).then(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
  