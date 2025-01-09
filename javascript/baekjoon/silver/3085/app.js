const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const checkMaxCount = (candy, maxCount) => {
  // 행체크
  for (let row of candy) {
    let count = 1;

    for (let i = 0; i < candy.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        count++;
      } else {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
      maxCount = Math.max(maxCount, count);
    }
  }

  // 열체크
  for (let col = 0; col < candy[0].length - 1; col++) {
    let count = 1;
    for (let row = 0; row < candy.length - 1; row++) {
      if (candy[row][col] === candy[row + 1][col]) {
        count++;
      } else {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

function solution(input) {
  const N = Number(input[0]);
  const candy = input.filter((_, index) => index !== 0).map((c) => c.split(""));

  let maxCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 오른쪽
      if (j + 1 < N && candy[i][j] !== candy[i][j + 1]) {
        // 바꾼다
        const target = candy[i][j];
        candy[i][j] = candy[i][j + 1];
        candy[i][j + 1] = target;

        maxCount = checkMaxCount(candy, maxCount);

        // 되돌리기
        candy[i][j + 1] = candy[i][j];
        candy[i][j] = target;
      }
      // 아래쪽
      if (i + 1 < N && candy[i][j] !== candy[i + 1][j]) {
        // 바꾼다
        const target = candy[i][j];
        candy[i][j] = candy[i + 1][j];
        candy[i + 1][j] = target;

        maxCount = checkMaxCount(candy, maxCount);
        // 되돌리기
        candy[i + 1][j] = candy[i][j];
        candy[i][j] = target;
      }
    }
  }

  return maxCount;
}

console.log(solution(input));
