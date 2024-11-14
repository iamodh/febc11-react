var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [100, 400, 900];

// for
var arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] ** 2);
}

// for...of
var arr2 = [];
for (let item of arr) {
  arr2.push(item ** 2);
}

// forEach
var arr2 = [];
arr.forEach((item) => {
  arr2.push(item ** 2);
});

// map
var arr2 = arr.map((item) => {
  return item ** 2;
});

// Arrow function
var arr2 = [];
arr.forEach((item) => {
  arr2.push(item ** 2);
});

console.log(arr2); // [100, 400, 900]
