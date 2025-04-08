const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines[0].split(" ").map(Number);
  const board = [];

  let answer = 0;

  // 전체 칸의 수
  const total = N * M;

  console.log("total :>> ", total);

  //  [ [ 1, 2, 3 ], [ 3, 1, 2 ] ] 이렇게 만드는 과정
  for (let i = 0; i < N; i++) {
    board.push(lines[i + 1].split("").map(Number));
  }

  console.log("board :>> ", board);
  // 전체 경우의 수는 2 ** total (2의 total승) 입니다.

  ////////////////////////////////////////

  for (let mask = 0; mask < 2 ** total; mask++) {
    console.log("================================= mask ", mask);

    let sum = 0;

    // 가로 조각 계산
    for (let i = 0; i < N; i++) {
      let currentNumber = 0;

      for (let j = 0; j < M; j++) {
        console.log("========= 가로 조각 =========");
        console.log("i, j :>> ", i, j);

        const idx = i * M + j;

        // 해당 칸이 가로 조각인지 확인: (mask & (2 ** idx)) === 0 이면 가로 조각입니다.
        console.log("idx, 2 ** idx :>> ", idx, 2 ** idx);

        if ((mask & (2 ** idx)) === 0) {
          currentNumber = currentNumber * 10 + board[i][j];
          console.log(
            "board[i][j], currentNumber :>> ",
            board[i][j],
            currentNumber
          );
        } else {
          sum += currentNumber;
          currentNumber = 0;
        }
      }
      sum += currentNumber; // 행의 마지막에 남은 숫자 추가
    }

    // 세로 조각 계산
    for (let j = 0; j < M; j++) {
      let currentNumber = 0;
      for (let i = 0; i < N; i++) {
        const idx = i * M + j;
        // 해당 칸이 세로 조각이면 (mask & (2 ** idx)) !== 0
        if ((mask & (2 ** idx)) !== 0) {
          currentNumber = currentNumber * 10 + board[i][j];
        } else {
          sum += currentNumber;
          currentNumber = 0;
        }
      }
      sum += currentNumber; // 열의 마지막에 남은 숫자 추가
    }
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(input));
