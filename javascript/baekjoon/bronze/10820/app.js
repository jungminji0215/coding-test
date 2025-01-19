const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const iter = inputs.length;

let ans = [];

for (let i = 0; i < iter; i++) {
  let input = inputs[i].split("");

  if (input.length === 0) continue;

  let strArr = [0, 0, 0, 0];

  for (let str of input) {
    let ascii = str.charCodeAt();

    if (ascii >= 97 && ascii <= 122) {
      strArr[0]++;
    } else if (ascii >= 65 && ascii <= 90) {
      strArr[1]++;
    } else if (ascii >= 48 && ascii <= 57) {
      strArr[2]++;
    } else if (ascii === 32) {
      strArr[3]++;
    }
  }

  ans.push(strArr.join(" "));
}

console.log(ans.join("\n"));
