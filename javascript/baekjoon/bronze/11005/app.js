const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  let [N, B] = input;

  const result = [];

  while (N > 0) {
    let 나머지 = N % B;

    if (나머지 >= 10) {
      나머지 = String.fromCharCode("A".charCodeAt(0) + 나머지 - 10);
    }

    result.push(나머지);

    N = Math.floor(N / B);
  }

  return result.reverse().join("");
}

console.log(solution(input));
