function sayHello(strings, ...values) {
  let res = "";
  strings.forEach((string, index) => {
    res += string;
    if (values[index]) res += `<strong>${values[index]}</strong>`;
  });
  return res;
}

// => 안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <stront>맑음</storng>입니다.
const result = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다."],
  "무지",
  "맑음"
);
// => 안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong> 입니다.
console.log(result);

const result2 = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다. 즐거운 ", " 보내세요."],
  "데이지",
  "흐림",
  "하루"
);

console.log(result2);
