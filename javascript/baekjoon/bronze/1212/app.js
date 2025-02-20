const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const octalNumber = input;

  if (octalNumber.length === 1 && octalNumber[0] === "0") {
    return 0;
  }

  const temp = [];

  for (let i = 0; i < octalNumber.length; i++) {
    // "3"
    let targetNum = octalNumber[i];

    const binary = parseInt(targetNum, 8).toString(2).padStart(3, "0");
    temp.push(binary);
  }

  let result = temp.join("");

  while (result[0] === "0") {
    const arr = result.split("");
    arr.shift();
    result = arr.join("");
  }

  return result;
}

console.log(solution(input));
