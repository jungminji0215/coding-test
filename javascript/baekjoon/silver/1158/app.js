const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const N = Number(input[0]);
  const K = Number(input[1]);

  const result = [];
  const people = [];
  let startIndex = 0;

  for (let i = 1; i <= N; i++) {
    people.push(i);
  }

  while (people.length) {
    let removeIndex = (startIndex + (K - 1)) % people.length;

    // 해당 인덱스의 요소를 배열에서 제거
    result.push(people[removeIndex]);
    people.splice(removeIndex, 1);

    startIndex = removeIndex % people.length;
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(input));
