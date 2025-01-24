const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[1]);

  const visited = new Array(N + 1).fill(false);
  const result = [];
  const temp = [];

  const backtracking = () => {
    if (temp.length === M) {
      result.push([...temp]);

      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i] === true) continue;

      visited[i] = true;
      temp.push(i);
      backtracking();
      temp.pop();
      visited[i] = false;
    }
  };

  backtracking();

  return result
    .map((num) => num.join(" "))
    .join("\n")
    .trim();
}

console.log(solution(input));
