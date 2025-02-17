const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const testCase = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const result = [];
  const temp = [];

  const 백트래킹 = (target) => {
    if (temp.length === M) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (target <= i) {
        temp.push(testCase[i]);
        백트래킹(i);
        temp.pop();
      }
    }
  };

  백트래킹(0);

  return [...new Set(result.map((num) => num.join(" ")))].join("\n");
}

console.log(solution(input));
