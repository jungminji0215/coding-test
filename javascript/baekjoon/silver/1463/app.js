const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);
  const dp = new Array(N + 1).fill(0);

  dp[1] = 0;

  for (let i = 2; i <= N; i++) {
    // 1 빼기 연산
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누기 연산: 만약 i가 3으로 나누어 떨어지면, i를 3으로 나눈 후의 연산 횟수에 1을 더한 값과 비교합니다.
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[N];
}

console.log(solution(input));
