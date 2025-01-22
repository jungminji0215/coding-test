const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const T = input[0];
  const dp = [...Array(11)];
  const result = [];

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 1; i <= T; i++) {
    result.push(dp[input[i]]);
  }

  return result.join("\n");
}

console.log(solution(input));
