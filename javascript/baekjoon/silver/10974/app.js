const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  const arr = Array.from({ length: N }, (_, i) => i + 1);

  const result = [];
  const temp = [];
  const visited = new Array(N).fill(false);

  const 모든순열 = () => {
    if (temp.length === N) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        temp.push(arr[i]);
        visited[i] = true;
        모든순열();
        temp.pop();
        visited[i] = false;
      }
    }
  };

  모든순열();

  return result.map((arr) => arr.join(" ")).join("\n");
}

console.log(solution(input));
