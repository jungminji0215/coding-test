const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  input.sort();

  const A = Number(input[0]);
  const B = Number(input[1]);
  const C = Number(input[2]);

  let result = 0;

  if (A === B && A === C && B === C) {
    result = 10000 + A * 1000;
  } else if (A !== B && A !== C && B !== C) {
    result = C * 100;
  } else {
    if (A === B || A === C) {
      result = 1000 + A * 100;
    } else if (B === C) {
      result = 1000 + B * 100;
    }
  }

  return result;
}

console.log(solution(input));
