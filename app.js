const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [N, M] = input.split(" ").map(Number);

  const temp = [];
  const result = [];

  const 백트래킹 = (start) => {
    if (temp.length === M) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i <= N; i++) {
      temp.push(i);

      백트래킹(i + 1);
      temp.pop();
    }
  };

  백트래킹(1);

  return result.map((arr) => arr.join(" ")).join("\n");
}

console.log(solution(input));
