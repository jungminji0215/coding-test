const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");
const numberArr = input.map((i) => parseInt(i));

function solution(input) {
  const A = input[0];
  const B = input[1];
  const C = input[2];

  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}

solution(numberArr);
