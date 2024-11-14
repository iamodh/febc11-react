var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;

const newArray = array.map((a) => {
  if (a % 2 === 1) return a;
  else return 0;
});

newArray.forEach((e) => {
  result += e;
});

console.log(result);
