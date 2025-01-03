// 06-04.js 복사
function f1() {
  return new Promise((resolve, reject) => {
    console.log(`2. f1 작업 시작.`);
    console.log(`3. f1 작업중...`);

    setTimeout(() => {
      console.log(`4. f1 작업 종료.`);
      resolve(`f1의 결과물`);
      reject(new Error("에러 발생"));
    }, 1000);
  });
}

function f2(f1Result) {
  return new Promise((resolve, reject) => {
    console.log(`5. ${f1Result}로 f2 작업 시작.`);
    console.log(`6. f2 작업중...`);

    setTimeout(() => {
      console.log(`7. f2 작업 종료.`);
      resolve(`최종 결과물`);
    }, Math.random() * 2000);
  });
}

// Promise를 리턴하는 함수(시간이 오래 걸리는 함수)가 await 때문에 동기적으로 실행되니
// 감싸고 있는 함수가 async로 비동기 함수가 되어서
// 전체 프로그램 동작에 영향을 안 주어야 한다.
async function test() {
  try {
    const f1Result = await f1();
    const result = await f2(f1Result);
    console.log(8, result);
  } catch (err) {
    console.log(err);
  }
}

console.log("1. 테스트 시작.");
test();
console.log("9. 테스트 완료.");
