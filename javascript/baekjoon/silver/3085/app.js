const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let maxCount = 0;

  const N = Number(input[0]);
  const candy = input
    .filter((_, index) => index !== 0)
    .map((el) => el.split(""));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 다를 경우 바꾸기
      if (j + 1 < N && candy[i][j] !== candy[i][j + 1]) {
        const target = candy[i][j];
        candy[i][j] = candy[i][j + 1];
        candy[i][j + 1] = target;

        // row 최대 길이 탐색
        for (let row of candy) {
          let count = 1;

          for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
              count++;
            } else {
              maxCount = Math.max(maxCount, count);

              count = 1;
            }
            maxCount = Math.max(maxCount, count);
          }
        }

        // col 최대 길이 탐색
        for (let col = 0; col < candy[0].length; col++) {
          let count = 1;

          for (let row = 1; row < candy.length; row++) {
            if (candy[row][col] === candy[row - 1][col]) {
              count++;
            } else {
              maxCount = Math.max(maxCount, count);
              count = 1;
            }
          }

          maxCount = Math.max(maxCount, count); // 마지막 연속 체크
        }

        // 되돌려 주기
        candy[i][j + 1] = candy[i][j];
        candy[i][j] = target;
      }

      // 아래쪽 변경

      // 다를 경우 바꾸기
      if (i + 1 < N && candy[i][j] !== candy[i + 1][j]) {
        const target = candy[i][j];
        candy[i][j] = candy[i + 1][j];
        candy[i + 1][j] = target;

        // row 최대 길이 탐색
        for (let row of candy) {
          let count = 1;

          for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
              count++;
            } else {
              maxCount = Math.max(maxCount, count);

              count = 1;
            }
            maxCount = Math.max(maxCount, count);
          }
        }

        // col 최대 길이 탐색
        for (let col = 0; col < candy[0].length; col++) {
          let count = 1;

          for (let row = 1; row < candy.length; row++) {
            if (candy[row][col] === candy[row - 1][col]) {
              count++;
            } else {
              maxCount = Math.max(maxCount, count);
              count = 1;
            }
          }

          maxCount = Math.max(maxCount, count); // 마지막 연속 체크
        }

        // 되돌려 주기
        candy[i + 1][j] = candy[i][j];
        candy[i][j] = target;
      }
    }
  }

  return maxCount;
}

console.log(solution(input));
