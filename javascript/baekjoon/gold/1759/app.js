const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [L, C] = input[0].split(" ").map(Number);
  const testCase = input[1].split(" ").sort();

  const temp = [];
  const result = [];
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const 백트래킹 = (start) => {
    if (temp.length === L) {
      // 모음과 자음의 개수를 체크
      let vowelCount = 0;
      let consonantCount = 0;
      for (const char of temp) {
        if (vowels.has(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
      if (vowelCount >= 1 && consonantCount >= 2) {
        result.push(temp.join(""));
      }
      return;
    }

    for (let i = start; i < C; i++) {
      temp.push(testCase[i]);
      백트래킹(i + 1);
      temp.pop();
    }
  };

  백트래킹(0);

  return result.join("\n");
}

console.log(solution(input));
