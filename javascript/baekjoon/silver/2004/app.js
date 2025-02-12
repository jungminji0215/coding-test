const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function countFactors(n, k) {
  let count = 0;
  while (n >= k) {
    count += Math.floor(n / k); // k의 배수를 계속 나눠서 개수 세기
    n = Math.floor(n / k);
  }
  return count;
}

function solution(input) {
  const [n, m] = input.map(Number);

  // 전체에서 2의 개수, 5의 개수 구하기
  let twoCount = countFactors(n, 2) - countFactors(m, 2) - countFactors(n - m, 2);
  let fiveCount = countFactors(n, 5) - countFactors(m, 5) - countFactors(n - m, 5);

  return Math.min(twoCount, fiveCount); // 2와 5 중 최소값이 10의 개수
}

console.log(solution(input));
