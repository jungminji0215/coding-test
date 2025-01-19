const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const first = input[0];
  const second = input[1];

  console.log(first * second[2]);
  console.log(first * second[1]);
  console.log(first * second[0]);
  console.log(first * second);
}

solution(input);
