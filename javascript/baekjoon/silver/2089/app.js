const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function toNegabinary(n) {
  // n이 0인 경우 바로 "0" 반환
  if (n === 0) return "0";

  let result = "";

  while (n !== 0) {
    // ((n % 2) + 2) % 2 를 통해 0 또는 1의 나머지를 얻음
    const remainder = ((n % 2) + 2) % 2;
    // 결과 문자열 앞에 나머지를 추가
    result = remainder.toString() + result;
    // n 갱신: (n - remainder) / (-2)
    n = (n - remainder) / -2;
  }

  return result;
}

function solution(input) {
  return toNegabinary(Number(input));
}

console.log(solution(input));
