const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    result.push(input.substr(i, input.length + 1));
  }

  return result.sort().join("\n");
}

console.log(solution(input));
