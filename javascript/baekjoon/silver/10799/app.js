const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const stack = [];
  let result = 0;

  // 레이저인지 막대기의 끝인지 구분하기 위한 변수
  let prev = "";

  for (let i = 0; i < input.length; i++) {
    // 괄호
    const parentheses = input[i];

    if (parentheses === "(") {
      stack.push(parentheses);
    } else {
      stack.pop();

      // 만약 이전 괄호가 ) 이면 막대기의 마지막
      if (prev === ")") {
        result = result + 1;
      } else {
        result = result + stack.length;
      }
    }

    prev = parentheses;
  }

  return result;
}

console.log(solution(input));
