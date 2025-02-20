const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const basket = Array.from({ length: N }, () => 0);

  for (let i = 1; i <= M; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);

    basket.fill(c, a - 1, b);
  }

  return basket.join(" ");
}

console.log(solution(input));
