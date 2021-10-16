setInterval(() => {
    console.log(new Date().toLocaleTimeString());
  }, 1000);
  
  let p1 = function(value) {
    return new Promise(function(resolve, reject) {
      console.log("[p1] in promise code");
      if (value) {
        setTimeout(function() {
          console.log("[p1] resolving...");
          resolve("p1: resolved");
        }, 2000);
      } else {
        setTimeout(function() {
          console.log("[p1] rejecting...");
          reject("p1: rejected");
        }, 3000);
      }
    });
  };
  
  let p2 = function(value) {
    return new Promise(function(resolve, reject) {
      console.log("[p2] in promise code");
      if (value) {
        setTimeout(function() {
          console.log("[p2] resolving...");
          resolve("p2: resolved");
        }, 5000);
      } else {
        setTimeout(function() {
          console.log("[p2] rejecting...");
          reject("p2: rejected");
        }, 5000);
      }
    });
  };
  