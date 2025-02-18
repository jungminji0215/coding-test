const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  while (input.length % 3 !== 0) {
    input = "0" + input;
  }

  let temp = [];

  for (let i = 0; i < input.length; i += 3) {
    temp.push(input.slice(i, i + 3));
  }

  const result = [];

  for (let i = 0; i < temp.length; i++) {
    const eightNum =
      Number(temp[i][0]) * (2 * 2) +
      Number(temp[i][1]) * (2 * 1) +
      Number(temp[i][2]) * 1;

    result.push(eightNum);
  }

  return result.join("");
}

console.log(solution(input));
