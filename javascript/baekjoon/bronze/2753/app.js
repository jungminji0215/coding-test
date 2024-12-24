const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const isLeapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

/**
 * 연도가 주어졌을 때
 * 윤년이면 1 출력
 * 아니면 0 출력
 */
function solution(input) {
  const year = Number(input);

  const result = isLeapYear(year);

  return result ? 1 : 0;
}

console.log(solution(input));
