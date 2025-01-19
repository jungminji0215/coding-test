const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const results = []; // 결과를 저장할 배열

  for (let i = 1; i <= input[0]; i++) {
    let count = 0;
    let isValid = true;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "(") {
        count = count + 1;
      } else {
        count = count - 1;
        if (count < 0) {
          isValid = false;
          break;
        }
      }
    }

    // 최종적으로 균형(balance)이 맞는지 확인
    if (isValid && count === 0) {
      results.push("YES");
    } else {
      results.push("NO");
    }
  }
  return results;
}

console.log(solution(input).join("\n"));

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");

// class Stack {
//   #array;

//   constructor(array = []) {
//     this.#array = array;
//   }

//   push(value) {
//     return this.#array.push(value);
//   }

//   pop() {
//     if (this.#array.length === 0) {
//       return -1;
//     }
//     return this.#array.pop();
//   }

//   size() {
//     return this.#array.length;
//   }

//   empty() {
//     // 스택이 비어있으면 1, 아니면 0 출력
//     return this.#array.length === 0 ? 1 : 0;
//   }

//   // 스택의 가장 위에 있는 정수를 출력한다.
//   // 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//   top() {
//     if (this.#array.length === 0) {
//       return -1;
//     } else {
//       return this.#array[this.#array.length - 1];
//     }
//   }

//   toString() {
//     return this.#array;
//   }
// }

// function solution(input) {
//   let result = [];

//   for (let i = 1; i <= input[0]; i++) {
//     const stack = new Stack();
//     let isYes = true;
//     for (let j = 0; j < input[i].length; j++) {
//       if (input[i][j] === "(") {
//         stack.push(input[i][j]);
//       } else {
//         if (stack.pop() === -1) {
//           isYes = false;
//           break;
//         }
//       }
//     }

//     // 만약 실패가 아니면 YES
//     if (stack.size() !== 0) {
//       isYes = false;
//     }
//     isYes ? result.push("YES") : result.push("NO");
//   }
//   return result;
// }
// console.log(solution(input).join("\n"));
