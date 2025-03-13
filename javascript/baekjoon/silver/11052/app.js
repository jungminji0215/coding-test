const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);

  const cards = input[1].split(" ").map(Number);

  const dp = [0, ...cards];

  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] + dp[i - j]);
    }
  }

  return dp[N];
}

console.log(solution(input));
