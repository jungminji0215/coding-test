const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const A = input[0];
  const B = input[1];
  const C = input[2];
  const D = input[3];

  result = Number(A + B) + Number(C + D);

  return result;
}

console.log(solution(input));
