const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const 최대공약수 = (a, b) => {
  return b === 0 ? a : 최대공약수(b, a % b);
};

function solution(input) {
  // N : 동생 수
  // S : 현재 수빈이의 위치
  const [N, S] = input[0].split(" ").map(Number);

  const testCase = input[1]
    .split(" ")
    .map(Number)
    .map((num) => Math.abs(S - num));

  let answer = testCase[0];
  for (let i = 1; i < N; i++) {
    answer = 최대공약수(answer, testCase[i]);
  }

  return answer;
}

console.log(solution(input));
