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

  const 백트래킹 = () => {
    if (temp.length === M) {
      result.push([...temp]);
      return;
    }

    for (let i = 1; i <= N; i++) {
      temp.push(i);
      백트래킹();
      temp.pop();
    }
  };

  백트래킹();

  return result.map((num) => num.join(" ")).join("\n");
}

console.log(solution(input));
