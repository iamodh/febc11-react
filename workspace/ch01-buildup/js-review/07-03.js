var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];

// 결과가 음수일 경우 a 먼저,
// 양수일 경우 b 먼저
// 0일 경우 그대로
array.sort((a, b) => a - b);

var result = array.find((number) => {
  return number % 2 === 0 && number % 3 === 0;
});

console.log(array);

console.log(result);
