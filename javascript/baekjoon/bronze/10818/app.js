const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const arr = input[1].split(" ").map(Number);

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return `${min} ${max}`;
}

console.log(solution(input));
