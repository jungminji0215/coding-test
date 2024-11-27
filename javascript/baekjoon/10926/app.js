const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const stringArr = fs.readFileSync(filePath).toString().split("\n");

function solution(stringArr) {
  return stringArr + "??!";
}

console.log(solution(stringArr));
