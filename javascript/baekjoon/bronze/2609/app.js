const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const 최대공약수 = (a, b) => {
  return b === 0 ? a : 최대공약수(b, a % b);
};

const 최대공배수 = (a, b) => {
  return (a * b) / 최대공약수(a, b);
};

function solution(input) {
  const [a, b] = input.sort((a, b) => b - a);
  const result = [];

  result.push(최대공약수(a, b));
  result.push(최대공배수(a, b));

  return result.join("\n");
}

console.log(solution(input));
