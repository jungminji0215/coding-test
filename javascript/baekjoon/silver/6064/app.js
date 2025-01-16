const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // 최대공약수(GCD) 계산
const lcm = (a, b) => (a * b) / gcd(a, b); // 최소공배수(LCM) 계산

const findYear = (M, N, x, y) => {
  const limit = lcm(M, N); // M과 N의 최소공배수
  let year = x; // x에서 시작
  while (year <= limit) {
    // y 값을 만족하는지 확인
    if (((year - 1) % N) + 1 === y) {
      return year;
    }
    year += M; // M 단위로 증가
  }
  return -1; // 조건을 만족하는 year가 없는 경우
};

function solution(input) {
  const count = input[0];

  const result = [];

  const arr = input
    .filter((_, index) => {
      return index !== 0;
    })
    .map((str) => str.split(" ").map(Number));

  for (let i = 0; i < count; i++) {
    const M = arr[i][0];
    const N = arr[i][1];
    const x = arr[i][2];
    const y = arr[i][3];

    const year = findYear(M, N, x, y);
    result.push(year);
  }

  return result.join("\n");
}

console.log(solution(input));
