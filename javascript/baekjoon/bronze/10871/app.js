const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, X] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const result = [];

  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      result.push(A[i]);
    }
  }

  return result.join(" ");
}

console.log(solution(input));
