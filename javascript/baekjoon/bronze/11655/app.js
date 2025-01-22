const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

function solution(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const charCode = input[i].charCodeAt();

    if (charCode >= 65 && charCode <= 90) {
      const shiftedCode = ((charCode - 65 + 13) % 26) + 65;
      result.push(String.fromCharCode(shiftedCode));
    } else if (charCode >= 97 && charCode <= 122) {
      const shiftedCode = ((charCode - 97 + 13) % 26) + 97;
      result.push(String.fromCharCode(shiftedCode));
    } else {
      result.push(input[i]);
    }
  }

  return result.join("");
}

console.log(solution(input));
