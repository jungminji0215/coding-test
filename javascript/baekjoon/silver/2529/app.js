const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const 부등호 = input[1].split(" ");
  const resultLength = 부등호.length + 1;

  const temp = [];
  const visited = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  let max = 0;
  let min = Infinity;

  const result = [max, min];

  const 백트래킹 = () => {
    if (temp.length === resultLength) {
      const target = Number(temp.join(""));

      if (target > max) {
        max = temp.join("");
        result[0] = max;
      }
      if (target < min) {
        min = temp.join("");
        result[1] = min;
      }
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (!visited[i]) {
        if (
          temp.length === 0 ||
          (부등호[temp.length - 1] === "<" && temp[temp.length - 1] < i) ||
          (부등호[temp.length - 1] === ">" && temp[temp.length - 1] > i)
        ) {
          temp.push(i);
          visited[i] = true;
          백트래킹();
          visited[i] = false;
          temp.pop();
        }
      }
    }
  };

  백트래킹();

  return result.join("\n");
}

console.log(solution(input));
