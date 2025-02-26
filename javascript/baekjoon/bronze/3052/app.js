const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const 나눌수 = 42;

  const 나머지배열 = [];

  for (let i = 0; i < input.length; i++) {
    const 나머지 = input[i] % 나눌수;
    나머지배열.push(나머지);
  }

  return [...new Set(나머지배열)].length;
}

console.log(solution(input));
