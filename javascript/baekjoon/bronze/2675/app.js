const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const result = [];

  // 3 ABC
  for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(" ");
    let tempResult = "";

    // A S[i]
    for (let i = 0; i < S.length; i++) {
      const target = S[i];
      const 반복횟수 = Number(R);

      let temp = "";

      temp += target.repeat(반복횟수);

      tempResult = tempResult + temp;
    }

    result.push(tempResult);
  }

  return result.join("\n");
}

console.log(solution(input));
