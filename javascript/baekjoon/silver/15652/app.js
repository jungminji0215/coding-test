const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [N, M] = input;
  const result = [];
  const temp = [];

  const 백트래킹 = (start) => {
    if (temp.length === M) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i <= N; i++) {
      temp.push(i);
      백트래킹(i);
      temp.pop();
    }
  };

  백트래킹(1);

  return result.map((num) => num.join(" ")).join("\n");
}

console.log(solution(input));
