const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

class Stack {
  #array;

  constructor(array = []) {
    this.#array = array;
  }

  push(value) {
    return this.#array.push(value);
  }

  pop() {
    if (this.#array.length === 0) {
      return -1;
    }
    return this.#array.pop();
  }

  size() {
    return this.#array.length;
  }

  empty() {
    // 스택이 비어있으면 1, 아니면 0 출력
    return this.#array.length === 0 ? 1 : 0;
  }

  // 스택의 가장 위에 있는 정수를 출력한다.
  // 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  top() {
    if (this.#array.length === 0) {
      return -1;
    } else {
      return this.#array[this.#array.length - 1];
    }
  }
}

function solution(input) {
  // 명령어 개수
  const testCount = input[0];
  const stack = new Stack();

  // 스택 결과를 담을 배열
  const results = [];

  for (let i = 1; i <= testCount; i++) {
    const command = input[i].split(" ");

    switch (command[0]) {
      case "push":
        stack.push(Number(command[1]));
        break;
      case "pop":
        results.push(stack.pop());
        break;

      case "size":
        results.push(stack.size());
        break;

      case "empty":
        results.push(stack.empty());
        break;

      case "top":
        results.push(stack.top());
        break;

      default:
        throw new Error(`알 수 없는 명령어: ${command[0]}`);
    }
  }
  console.log(results.join("\n"));
}

solution(input);
