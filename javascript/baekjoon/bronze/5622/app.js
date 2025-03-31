const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 초와 문자를 매칭
  const match = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
  };

  let minTime = 0;
  for (let i = 0; i < input.length; i++) {
    for (let x in match) {
      if (x.includes(input[i])) {
        minTime += match[x];
      }
    }
  }

  return minTime;
}

console.log(solution(input));
