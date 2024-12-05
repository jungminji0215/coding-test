const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((i) => Number(i));

function solution(input) {
  const result = [];
  const count = input[0];
  const stack = [];
  let stackNumber = 1;

  for (let i = 1; i <= count; i++) {
    while (stackNumber <= input[i]) {
      stack.push(stackNumber);
      result.push("+");
      stackNumber++;
    }

    if (stack[stack.length - 1] === input[i]) {
      result.push("-");
      stack.pop();
    } else {
      return ["NO"];
    }
  }

  return result;
}

console.log(solution(input).join("\n"));
