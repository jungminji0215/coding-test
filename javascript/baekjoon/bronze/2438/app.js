const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);
  result = [];

  for (let i = 1; i <= N; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + "*";
    }
    result.push(star);
  }

  return result.join("\n");
}

console.log(solution(input));
