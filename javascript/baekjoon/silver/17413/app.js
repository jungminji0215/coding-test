const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const regex = /(<[^>]+>)|([^<]+)/g;
  let inputArr = input.match(regex);

  for (let i = 0; i < inputArr.length; i++) {
    // 태그가 아닌 부분만 처리
    if (!inputArr[i].startsWith("<")) {
      const words = inputArr[i].split(" ");

      for (let j = 0; j < words.length; j++) {
        words[j] = words[j].split("").reverse().join("");
      }
      inputArr[i] = words.join(" ");
    }
  }
  return inputArr.join("");
}

console.log(solution(input));
