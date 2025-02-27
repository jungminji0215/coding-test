const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [N, B] = input;

  let result = parseInt(N, Number(B));

  return result;
}

console.log(solution(input));
