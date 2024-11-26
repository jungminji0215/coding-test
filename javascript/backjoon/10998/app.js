const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const stringArr = fs.readFileSync(filePath).toString().split(" ");
const numberSrr = stringArr.map((item) => Number(item));

function solution(arr) {
  return arr[0] * arr[1];
}

console.log(solution(numberSrr));
