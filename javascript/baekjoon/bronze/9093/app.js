const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const caseCount = Number(input[0]);

  for (let i = 1; i <= caseCount; i++) {
    let words = input[i].split(" ");
    let result = words
      .map((word) => {
        return word.split("").reverse().join("");
      })
      .join(" ");
    console.log(result);
  }
}

solution(input);
