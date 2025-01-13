const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let result = "";
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    let value = input[i];

    if (value === "(") {
      stack.push(value);
    } else if (value === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop();
    } else if (value === "*" || value === "/") {
      while (
        stack.length > 0 &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      ) {
        result += stack.pop();
      }

      stack.push(value);
    } else if (value === "+" || value === "-") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }

      stack.push(value);
    } else {
      result += value;
    }
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

console.log(solution(input));
