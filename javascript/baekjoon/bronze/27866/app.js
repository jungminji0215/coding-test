const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const S = input[0];
  const i = input[1];

  return S[i - 1];
}

console.log(solution(input));
