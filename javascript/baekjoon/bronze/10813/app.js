const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ");

    const temp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp;
  }

  return arr.join(" ");
}

console.log(solution(input));
