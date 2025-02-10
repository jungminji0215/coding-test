// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = fs.readFileSync(filePath).toString().trim();

// const factorial = (N) => {
//   let sum = BigInt(1); // 처음부터 BigInt로 설정

//   if (N === 0) return BigInt(1);

//   for (let i = 1; i <= N; i++) {
//     sum = sum * BigInt(i); // BigInt 연산 유지
//   }

//   return sum;
// };

// function solution(input) {
//   const N = Number(input);

//   let result = 0;

//   const fact = factorial(N);

//   const temp = Array.from(String(fact));

//   for (let i = temp.length - 1; i >= 0; i--) {
//     if (temp[i] === "0") {
//       result = result + 1;
//     } else {
//       break;
//     }
//   }

//   return result;
// }

// console.log(solution(input));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const factorial = (N) => {
  let sum = BigInt(1); // BigInt로 초기화

  if (N === 0) return BigInt(1);

  for (let i = 1; i <= N; i++) {
    sum *= BigInt(i); // BigInt 연산 유지
  }

  return sum;
};

function solution(input) {
  const N = Number(input);
  let result = 0;

  let fact = factorial(N); // N! 계산

  // 10으로 나누면서 끝자리 0 개수 카운트
  while (fact % 10n === 0n) {
    result += 1;
    fact /= 10n; // 끝자리 0 제거
  }

  return result;
}

console.log(solution(input));
