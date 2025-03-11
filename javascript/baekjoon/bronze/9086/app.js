const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const testCase = input.slice(1);

  const result = [];

  for (let i = 0; i < T; i++) {
    const str = testCase[i];
    const strLength = str.length;
    const first = str[0];
    const end = str[strLength - 1];

    result.push(first + end);
  }

  return result.join("\n");
}

console.log(solution(input));
