const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length - 1; i++) {
    const arr = input[i].split(" ").map(Number);
    const k = arr[0];
    const kArr = arr.slice(1);

    const temp = [];
    const result = [];

    const visited = Array.from({ length: k }).fill(false);

    const 백트래킹 = (start) => {
      if (temp.length === 6) {
        result.push(temp.join(" "));
        return;
      }

      for (let j = start; j < kArr.length; j++) {
        if (!visited[j]) {
          temp.push(kArr[j]);
          visited[j] = true;
          백트래킹(j + 1);
          temp.pop();
          visited[j] = false;
        }
      }
    };

    백트래킹(0);

    answer.push(result.join("\n"));
  }

  return answer.join("\n\n");
}

console.log(solution(input));
