const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);

  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const temp = [];
  const visited = Array(N).fill(false);
  let result = 0;

  const 최대찾기 = () => {
    if (temp.length === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum = sum + Math.abs(temp[i] - temp[i + 1]);
      }

      if (result < sum) {
        result = sum;
      }
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        temp.push(arr[i]);
        visited[i] = true;
        최대찾기();
        visited[i] = false;
        temp.pop();
      }
    }
  };

  최대찾기();

  return result;
}

console.log(solution(input));
