const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const arr = input.map(Number);

  const result = [];

  for (let i = 1; i <= 30; i++) {
    if (!arr.includes(i)) result.push(i);
  }

  return result.join("\n");
}

console.log(solution(input));
