// 지정한 수가 소수인지 여부를 반환
var isPrime2 = function (num) {
  console.time("소요 시간");
  console.log("소수 판별 시작.", num);

  // TODO: 소수 판별 코드
  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  console.log("소수 판별 결과.", prime);
  console.timeEnd("소요 시간");
  return prime;
};

// 매개변수에 대한 결과값이 항상 동일할 때 사용한다. (순수함수)
var isPrime = function (num) {
  // 캐시를 위한 코드
  isPrime._cache = isPrime._cache || {};
  if (isPrime._cache[num] !== undefined) {
    // cache hit
    console.log("cache hit");
    return isPrime._cache[num];
  } else {
    // 소수 판별 코드
    return (isPrime._cache[num] = isPrime2(num));
  }
};

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(1000000007);
isPrime(1000000007);
isPrime(1000000007);
