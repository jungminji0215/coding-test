const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  for (let i = 1; i <= 2 * N - 1; i++) {
    // 공백 개수는 줄 번호에 따라 달라짐: i가 1부터 N까지는 (N-i), N+1부터는 (i-N)
    const spaces = " ".repeat(Math.abs(N - i));
    // 별의 개수를 구하는 공식: 윗부분과 아랫부분을 조건문으로 분리
    const stars =
      i <= N ? "*".repeat(2 * i - 1) : "*".repeat(2 * (2 * N - i) - 1);
    console.log(spaces + stars);
  }
}

solution(input);
