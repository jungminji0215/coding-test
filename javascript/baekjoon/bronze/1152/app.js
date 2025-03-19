const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  if (input === "") return 0;
  return input.split(" ").length;
}

console.log(solution(input));
