const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1 1 2 3 4 2 1
function solution(input) {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map((a) => Number(a));

  const stack = [];
  const result = Array(N).fill(-1);
  const count = {};

  // 각 숫자의 개수
  for (let i = 0; i < N; i++) {
    const current = arr[i];

    if (count[current]) {
      count[current] += 1;
    } else {
      count[current] = 1;
    }
  }

  for (let i = 0; i < N; i++) {
    // 스택이 비어있지 않고, 현재 원소가 스택 top에 해당하는 원소보다 큰 경우
    while (
      stack.length &&
      count[arr[stack[stack.length - 1]]] < count[arr[i]]
    ) {
      const index = stack.pop(); // 스택에서 인덱스를 꺼냄

      result[index] = arr[i]; // 해당 인덱스의 오큰수 갱신
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }

  return result.join(" ");
}

console.log(solution(input));
