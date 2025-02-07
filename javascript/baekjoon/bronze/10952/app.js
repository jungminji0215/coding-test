const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const result = [];

  for (let i = 0; i < input.length - 1; i++) {
    const [A, B] = input[i].split(" ").map(Number);

    result.push(A + B);
  }

  return result.join("\n");
}

console.log(solution(input));
