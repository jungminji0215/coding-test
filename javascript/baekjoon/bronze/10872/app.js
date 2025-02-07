const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  let result = 1;

  if (N === 0) return 1;

  for (let i = 1; i <= N; i++) {
    result = result * i;
  }

  return result;
}

console.log(solution(input));
