const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const X = Number(input[0]); // 총 금액
  const N = Number(input[1]); // 구매한 물건 종류 수

  let totalPrice = 0;

  for (let i = 2; i < N + 2; i++) {
    const [price, cnt] = input[i].split(" ").map(Number);
    totalPrice = totalPrice + price * cnt;
  }

  return X === totalPrice ? "Yes" : "No";
}

console.log(solution(input));
