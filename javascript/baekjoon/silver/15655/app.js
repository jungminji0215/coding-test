const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const testCase = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const temp = [];
  const result = [];

  const 백트래킹 = (startIndex) => {
    if (temp.length === M) {
      result.push([...temp]);
      return;
    }

    for (let i = startIndex; i < N; i++) {
      temp.push(testCase[i]);
      백트래킹(i + 1);
      temp.pop();
    }
  };

  백트래킹(0);

  return result.map((num) => num.join(" ")).join("\n");
}

console.log(solution(input));
