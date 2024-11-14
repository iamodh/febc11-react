var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;

result = array.reduce((sum, num) => {
  if (num % 2 !== 0) return sum + num;
  else return sum;
}, 0);

console.log(result);
