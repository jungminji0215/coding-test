const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);
  const result = [];

  for (let i = 1; i <= N; i++) {
    let star = "";

    star = star + " ".repeat(N - i) + "*".repeat(i);

    result.push(star);
  }

  return result.join("\n");
}

console.log(solution(input));
