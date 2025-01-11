const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const postfix = input[1];
  const numbers = input
    .filter((_, index) => index > 1)
    .map((number) => Number(number));

  const alphabetAndNumberMapping = {};
  const stack = [];

  // 알파벳 배열 생성
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // 알파벳과 숫자 매핑
  for (let i = 0; i < N; i++) {
    alphabetAndNumberMapping[alphabet[i]] = numbers[i];
  }

  for (let i = 0; i < postfix.length; i++) {
    if (alphabet.includes(postfix[i])) {
      stack.push(postfix[i]);
    } else {
      const operandA = stack.pop();
      const operandB = stack.pop();

      const valueA = alphabet.includes(operandA)
        ? alphabetAndNumberMapping[operandA]
        : operandA;
      const valueB = alphabet.includes(operandB)
        ? alphabetAndNumberMapping[operandB]
        : operandB;

      // 연산 수행
      let result;
      switch (postfix[i]) {
        case "+":
          result = valueB + valueA;
          break;
        case "-":
          result = valueB - valueA;
          break;
        case "*":
          result = valueB * valueA;
          break;
        case "/":
          result = valueB / valueA;
          break;
        default:
          throw new Error(`Invalid operator: ${postfix[i]}`);
      }

      stack.push(result);
    }
  }

  return stack.pop().toFixed(2);
}

console.log(solution(input));
