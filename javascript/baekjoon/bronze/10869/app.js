const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const stringArr = fs.readFileSync(filePath).toString().split(" ");
const numberSrr = stringArr.map((item) => Number(item));

function solution(arr) {
  console.log(arr[0] + arr[1]);
  console.log(arr[0] - arr[1]);
  console.log(arr[0] * arr[1]);
  console.log(Math.floor(arr[0] / arr[1]));
  console.log(arr[0] % arr[1]);
}

solution(numberSrr);
