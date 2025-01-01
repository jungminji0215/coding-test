const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

const getChangeTime = (H, M) => {
  const minusMinutes = 45;

  let newMinute = M - minusMinutes;
  let newHour = H;

  if (newMinute < 0) {
    newMinute = 60 + newMinute;
    newHour = newHour - 1;
  }

  if (newHour < 0) {
    newHour = 23;
  }

  return [newHour, newMinute];
};

function solution(input) {
  const H = Number(input[0]);
  const M = Number(input[1]);

  const result = getChangeTime(H, M);

  return `${result[0]} ${result[1]}`;
}

console.log(solution(input));
