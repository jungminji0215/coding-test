const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const result = [];

  for (let i = 1; i <= 9; i++) {
    result.push(`${input} * ${i} = ${input * i}`);
  }

  return result.join("\n");
}

console.log(solution(input));
