const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const stringInput = fs.readFileSync(filePath).toString();

function solution(stringInput) {
  return stringInput - 543;
}

console.log(solution(parseInt(stringInput)));
