const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function solution(input) {
  const 제일큰수 = Math.max(...input);
  const 소수들 = [];

  const 소수판단함수 = (value) => {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) return false;
    }
    return true;
  };

  // 제일큰수 보다 작은 소수 모두 구하기
  for (let i = 3; i <= 제일큰수; i += 2) {
    if (소수판단함수(i)) {
      소수들.push(i);
    }
  }

  const 결과들 = [];
  for (let i = 0; i < input.length - 1; i++) {
    const n = input[i];
    let found = false;

    for (let j = 0; j < 소수들.length; j++) {
      if (소수들[j] >= n) break;
      for (let k = j; k < 소수들.length; k++) {
        if (소수들[j] + 소수들[k] === n) {
          결과들.push(`${n} = ${소수들[j]} + ${소수들[k]}`);
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) 결과들.push("Goldbach's conjecture is wrong.");
  }

  return 결과들.join("\n");
}

console.log(solution(input));
