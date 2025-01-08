const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

function solution(input) {
  let result;

  const sum = input.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // 이중 for문으로 두 명의 난쟁이를 찾는다
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // 두 난쟁이를 제외했을 때 합이 100이라면
      if (sum - input[i] - input[j] === 100) {
        // 해당 두 난쟁이를 제외하고 남은 배열 생성
        result = input.filter((num) => num !== input[i] && num !== input[j]);
        return result.sort((a, b) => a - b).join("\n");
      }
    }
  }
}

console.log(solution(input));
