const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const 최대공약수 = (a, b) => {
  return b === 0 ? a : 최대공약수(b, a % b);
};

const 최대공배수 = (a, b) => {
  return (a * b) / 최대공약수(a, b);
};

function solution(input) {
  const T = Number(input[0]);
  const result = [];

  for (let i = 1; i <= T; i++) {
    const [a, b] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);

    result.push(최대공배수(a, b));
  }

  return result.join("\n");
}

console.log(solution(input));
