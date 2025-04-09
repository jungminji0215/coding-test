const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);
  if (N === 1) return "1"; // 문자열로 반환

  // BigInt를 사용하여 초기화
  const dp = Array.from({ length: N + 1 }, () => [0n, 0n]);
  dp[1][0] = 0n;
  dp[1][1] = 1n;

  for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }

  // 결과를 문자열로 변환하여 반환
  return (dp[N][0] + dp[N][1]).toString();
}

console.log(solution(input));
