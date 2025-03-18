const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const cardPrice = [0, ...input[1].split(" ").map(Number)];

  dp = [];

  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    // 1,2,3,4 개
    let min = Infinity;
    for (let j = 1; j <= i; j++) {
      // console.log("cardPrice[i] :>> ", cardPrice[i]);
      min = Math.min(min, cardPrice[j] + dp[i - j]);
    }
    dp[i] = min;
  }

  return dp[N];
}

console.log(solution(input));
