/** 이 문제는 자바스크립트로는 메모리초과가 발생한다. */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const resultE = Number(input[0]);
  const resultS = Number(input[1]);
  const resultM = Number(input[2]);
  1476;

  let year = 1;

  let E = 1;
  let S = 1;
  let M = 1;

  while (true) {
    if (E === resultE && S === resultS && M === resultM) {
      return year;
    }

    if (E === 15) {
      E = 1;
    } else {
      E++;
    }

    if (S === 28) {
      S = 1;
    } else {
      S++;
    }

    if (M === 19) {
      M = 1;
    } else {
      M++;
    }

    year++;
  }
}

console.log(solution(input));
