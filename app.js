const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const cnt = Number(input) / 4;

  const result = [];

  for (let i = 0; i < cnt; i++) {
    result.push("long");
  }

  result.push("int");

  return result.join(" ");
}

console.log(solution(input));
