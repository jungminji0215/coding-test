const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const result = [];

  const testCase = input.map(Number).slice(1);

  const maxNumber = Math.max(...testCase);

  const dp = [];
  dp[0] = [0, 0, 0, 0];
  dp[1] = [0, 1, 0, 0];
  dp[2] = [0, 0, 1, 0];
  dp[3] = [0, 1, 1, 1];

  for (let i = 4; i <= maxNumber; i++) {
    dp[i] = [
      0,
      (dp[i - 1][2] + dp[i - 1][3]) % 1000000009,
      (dp[i - 2][1] + dp[i - 2][3]) % 1000000009,
      (dp[i - 3][1] + dp[i - 3][2]) % 1000000009,
    ];
  }

  for (let i = 0; i < testCase.length; i++) {
    result.push(dp[testCase[i]]);
  }

  return result
    .map((r) =>
      r.reduce((acc, cur) => {
        return (acc + cur) % 1000000009;
      }, 0)
    )
    .join("\n");
}

console.log(solution(input));
