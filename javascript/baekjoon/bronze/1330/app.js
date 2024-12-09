const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((str) => {
    return Number(str);
  });

function solution(input) {
  const A = input[0];
  const B = input[1];

  if (A > B) {
    return ">";
  } else if (A < B) {
    return "<";
  } else {
    return "==";
  }
}

console.log(solution(input));
