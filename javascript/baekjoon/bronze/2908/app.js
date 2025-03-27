const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [a, b] = input
    .split(" ")
    .map((num) => num.split("").reverse().join(""))
    .map(Number);

  return Math.max(a, b);
}

console.log(solution(input));
