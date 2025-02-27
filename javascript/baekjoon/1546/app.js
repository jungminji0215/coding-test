const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);

  const score = input[1].split(" ").map(Number);
  const maxScore = Math.max(...score);
  const result = [];

  for (let i = 0; i < N; i++) {
    const changeScore = (score[i] / maxScore) * 100;
    result.push(changeScore);
  }

  const sum = result.reduce((acc, cur) => acc + cur, 0);

  return sum / N;
}

console.log(solution(input));
