const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const number = input.map(Number);
  const result = [];

  const maxNumber = Math.max(...number);
  result.push(maxNumber);
  const maxNumberIndex = number.indexOf(maxNumber);
  result.push(maxNumberIndex + 1);

  return result.join("\n");
}

console.log(solution(input));
