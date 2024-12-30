const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

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

function solution(input) {
  const [x, y] = input;
  return getQuadrant(x, y);
}

console.log(solution(input));
