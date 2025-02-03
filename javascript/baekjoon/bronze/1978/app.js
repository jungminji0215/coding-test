const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  let result = 0;
  const T = input[1].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    let isPrime = true;

    if (T[i] === 1) continue;

    for (let j = 2; j <= Math.sqrt(T[i]); j++) {
      if (T[i] % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) result++;
  }

  return result;
}

console.log(solution(input));
