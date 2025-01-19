const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");
const numberArr = input.map((str) => Number(str));

function solution(numberArr) {
  console.log(numberArr[0] + numberArr[1] + numberArr[2]);
}

solution(numberArr);
