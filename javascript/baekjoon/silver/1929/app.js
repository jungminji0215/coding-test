const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(input) {
  const start = input[0];
  const end = input[1];

  const result = [];

  for (let i = start; i <= end; i++) {
    let 소수 = true;

    if (i === 1) continue;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        소수 = false;
        break;
      }
    }

    if (소수) result.push(i);
  }

  return result.join("\n");
}

console.log(solution(input));
