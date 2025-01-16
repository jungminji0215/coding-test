const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const word = input.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const result = new Array(26).fill(-1);

  word.forEach((w, i) => {
    const index = alphabet.indexOf(w, 0);
    if (result[index] === -1) {
      result[index] = i;
    }
  });

  return result.join(" ");
}

console.log(solution(input));
