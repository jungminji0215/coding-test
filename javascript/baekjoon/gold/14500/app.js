const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map((num) => Number(num));

  const arr = input
    .filter((_, index) => index !== 0)
    .map((str) => str.split(" ").map(Number));

  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // Cas1-A
      if (j + 1 < M && j + 2 < M && j + 3 < M) {
        const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
        max = Math.max(max, sum);
      }

      // Case1-B
      if (i + 1 < N && i + 2 < N && i + 3 < N) {
        const sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
        max = Math.max(max, sum);
      }

      // Case2
      if (i + 1 < N && j + 1 < M) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }

      // Case2
      if (i + 1 < N && i + 2 < N && j + 1 < M) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j + 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j - 1 >= 0) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j - 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j + 1 < M) {
        const sum = arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 2][j];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j + 1 < M) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j + 2 < M) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j - 1 >= 0 && j - 2 >= 0) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 1][j - 1] + arr[i + 1][j - 2];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j + 2 < M) {
        const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j + 2 < M) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }

      // case4
      if (i + 1 < N && i + 2 < N && j + 1 < M) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j + 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j - 1 >= 0) {
        const sum =
          arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 2][j - 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j - 1 >= 0) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j + 2 < M) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
        max = Math.max(max, sum);
      }

      // case5
      if (i + 1 < N && j + 1 < M && j - 1 >= 0) {
        const sum =
          arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && j + 1 < M && j + 2 < M) {
        const sum =
          arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j + 1 < M) {
        const sum =
          arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j];
        max = Math.max(max, sum);
      }

      if (i + 1 < N && i + 2 < N && j - 1 >= 0) {
        const sum =
          arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 2][j];
        max = Math.max(max, sum);
      }
    }
  }

  return max;
}

console.log(solution(input));
