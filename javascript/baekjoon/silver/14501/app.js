const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);

  const test = input.slice(1).map((num) => num.split(" ").map(Number));

  const temp = [];
  let max = 0;

  const 백트래킹 = (start) => {
    if (start <= N) {
      const tempMax = temp.reduce((acc, curr) => acc + curr[1], 0);

      max = Math.max(max, tempMax);
    }

    for (let i = start; i < N; i++) {
      temp.push(test[i]);

      백트래킹(i + test[i][0]);
      temp.pop();
    }
  };

  백트래킹(0);

  return max;
}

console.log(solution(input));
