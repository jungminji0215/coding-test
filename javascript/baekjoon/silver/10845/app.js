const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  #array;

  constructor() {
    this.#array = [];
  }

  push(value) {
    this.#array.push(value);
  }

  /**
   * 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다.
   * 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
   * */
  pop() {
    if (this.#array.length === 0) {
      return -1;
    }

    return this.#array.shift();
  }

  size() {
    return this.#array.length;
  }

  /**
   * 큐가 비어있으면 1, 아니면 0을 출력한다.
   */
  empty() {
    if (this.#array.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * 큐의 가장 앞에 있는 정수를 출력한다.
   * 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
   */
  front() {
    if (this.#array.length === 0) {
      return -1;
    } else {
      return this.#array[0];
    }
  }

  /**
   * 큐의 가장 뒤에 있는 정수를 출력한다.
   * 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
   */
  back() {
    if (this.#array.length === 0) {
      return -1;
    } else {
      return this.#array[this.#array.length - 1];
    }
  }
}

function solution(input) {
  const result = [];
  const commandCount = input[0];
  const queue = new Queue();

  for (let i = 1; i <= commandCount; i++) {
    const command = input[i].split(" ");

    switch (command[0]) {
      case "push":
        queue.push(Number(command[1]));
        break;
      case "pop":
        result.push(queue.pop());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(queue.empty());
        break;
      case "front":
        result.push(queue.front());
        break;
      case "back":
        result.push(queue.back());
        break;
      default:
        console.log("잘못된 명령어입니다.");
        break;
    }
  }

  return result;
}

console.log(solution(input).join("\n"));
