const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const result = [];

  for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    result.push(a + b);
  }
  return result.join("\n");
}

console.log(solution(input));
