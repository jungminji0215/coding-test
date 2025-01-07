const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const count = Number(input[0]);
  const numbers = input[1].split(" ").map((number) => Number(number));

  const stack = [];
  const result = Array(count).fill(-1);

  for (let i = 0; i < count; i++) {
    // 스택이 비어있지 않고, 현재 원소가 스택 top에 해당하는 원소보다 큰 경우
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop(); // 스택에서 인덱스를 꺼냄

      result[index] = numbers[i]; // 해당 인덱스의 오큰수 갱신
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }

  return result.join(" ");
}

console.log(solution(input));
