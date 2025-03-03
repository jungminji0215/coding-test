const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const basket = Array.from({ length: N }, (_, i) => i + 1);

  const testCase = input.slice(1).map((str) => str.split(" ").map(Number));

  for (let i = 0; i < M; i++) {
    const [a, b] = testCase[i];

    const changeArr = basket.slice(a - 1, b);

    basket.splice(a - 1, b - a + 1, ...changeArr.reverse());
  }

  return basket.join(" ");
}

console.log(solution(input));
