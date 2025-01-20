const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  let result = 0;

  for (let i = 1; i <= N; i *= 10) {
    result += N - i + 1;
  }

  return result;
}

console.log(solution(input));

// 나는 이렇게 풀 수 있는 생각을 못할 것 같은데.. 다른 사람들은 천재인가
