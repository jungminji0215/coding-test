const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getQuadrant = (x, y) => {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else {
    return 4;
  }
};

const solution = (input) => {
  const [x, y] = input.map(Number);
  console.log(getQuadrant(x, y));
};

// 입력 처리
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    solution(input);
    rl.close();
  }
});
