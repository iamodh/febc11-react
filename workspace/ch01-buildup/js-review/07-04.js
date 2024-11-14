var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];
var result = 0;
array
  .filter((number) => {
    return number % 2 === 1;
  })
  .forEach((number) => (result += number));

console.log(result);
