const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  // 킹 퀸 룩 비숍 나이트 폰
  const match = [1, 1, 2, 2, 2, 8];

  const result = [];

  for (let i = 0; i < input.length; i++) {
    result.push(match[i] - input[i]);
  }

  return result.join(" ");
}

console.log(solution(input));
