const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let result = 0;

  for (let i = 1; i <= Number(input); i++) {
    result += i;
  }

  return result;
}

console.log(solution(input));
