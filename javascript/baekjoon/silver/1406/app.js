const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const initialString = input[0];
  const commands = input.slice(2);

  // 두 개의 스택 초기화
  const leftStack = initialString.split("");
  const rightStack = [];

  for (const command of commands) {
    const [cmd, char] = command.split(" ");

    switch (cmd) {
      case "L":
        if (leftStack.length > 0) {
          rightStack.push(leftStack.pop());
        }
        break;
      case "D":
        if (rightStack.length > 0) {
          leftStack.push(rightStack.pop());
        }
        break;
      case "B":
        if (leftStack.length > 0) {
          leftStack.pop();
        }
        break;
      case "P":
        leftStack.push(char);
        break;
    }
  }

  return leftStack.concat(rightStack.reverse()).join("");
}

console.log(solution(input));
