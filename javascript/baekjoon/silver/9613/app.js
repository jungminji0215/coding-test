const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const 최대공약수 = (a, b) => {
  return b === 0 ? a : 최대공약수(b, a % b);
};

function solution(input) {
  const t = Number(input[0]);
  const result = [];

  for (let i = 1; i <= t; i++) {
    const numbers = input[i].split(" ").map(Number);
    const testCase = numbers.slice(1);

    let sum = 0;

    for (let j = 0; j < testCase.length; j++) {
      for (let k = j + 1; k < testCase.length; k++) {
        sum += 최대공약수(testCase[j], testCase[k]);
      }
    }

    result.push(sum);
  }

  return result.join("\n");
}

console.log(solution(input));
