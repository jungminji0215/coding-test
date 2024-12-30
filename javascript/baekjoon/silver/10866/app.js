const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Deque {
  #array;

  constructor() {
    this.#array = [];
  }

  // 정수 x 를 덱의 앞에 넣는다.
  pushFront(value) {
    this.#array.unshift(value);
  }

  // 정수 x 를 덱의 뒤에 넣는다.
  pushBack(value) {
    this.#array.push(value);
  }

  // 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다.
  // 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  popFront() {
    if (this.#array.length === 0) {
      return -1;
    }

    return this.#array.shift();
  }

  // 덱의 가장 뒤에 잇는 수를 빼고, 그 수를 출력한다.
  // 만약, 덱에 들어있는 정수가 없는 경우에는 -1 을 출력한다.
  popBack() {
    if (this.#array.length === 0) {
      return -1;
    }

    return this.#array.pop();
  }

  // 덱에 있는 정수의 개수를 출력한다.
  size() {
    return this.#array.length;
  }

  // 덱이 비어있으면 1을, 아니면 0을 출력한다.
  empty() {
    if (this.#array.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  // 덱의 가장 앞에 있는 정수를 출력한다.
  // 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  front() {
    if (this.#array.length === 0) {
      return -1;
    }

    return this.#array[0];
  }

  // 덱의 가장 뒤에 있는 정수를 출력한다.
  // 만약 덱에 들어잇는 정수가 없는 경우에는 -1을 출력한다.
  back() {
    if (this.#array.length === 0) {
      return -1;
    }

    return this.#array[this.#array.length - 1];
  }
}

function solution(input) {
  const result = [];
  const commandCount = input[0];
  const deque = new Deque();

  for (let i = 1; i <= commandCount; i++) {
    const command = input[i].split(" ");
    switch (command[0]) {
      case "push_front":
        deque.pushFront(Number(command[1]));
        break;
      case "push_back":
        deque.pushBack(Number(command[1]));
        break;
      case "pop_front":
        result.push(deque.popFront());
        break;
      case "pop_back":
        result.push(deque.popBack());
        break;
      case "size":
        result.push(deque.size());
        break;
      case "empty":
        result.push(deque.empty());
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;
      default:
        console.log("잘못된 명령어입니다.");
        break;
    }
  }

  return result;
}

console.log(solution(input).join("\n"));
