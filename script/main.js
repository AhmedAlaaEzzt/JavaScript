const array = [1, 2, 10, 16, 5, 3];

const numsGreaterThan5 = [];
array.forEach(num => {
  if(num > 5) numsGreaterThan5.push(num)
});

console.log(numsGreaterThan5);
