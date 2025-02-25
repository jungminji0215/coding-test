const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const arr = input[1].split(" ").map(Number);
  const targetNumber = Number(input[2]);

  const filterArr = arr.filter((num) => num === targetNumber);

  return filterArr.length;
}

console.log(solution(input));
