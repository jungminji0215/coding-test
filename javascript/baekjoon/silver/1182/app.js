const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, S] = input[0].split(" ").map(Number);
  const testCase = input[1].split(" ").map(Number);

  let result = 0; // 조건에 맞는 부분수열의 개수를 저장하는 변수
  const temp = []; // 현재 선택한 원소들을 저장하는 배열

  const 백트래킹 = (start) => {
    console.log("=====================================");
    console.log("start :>> ", start);
    console.log("temp.length :>> ", temp.length);
    console.log("temp :>> ", temp);

    if (temp.length >= 1) {
      const sum = temp.reduce((acc, cur) => acc + cur, 0);
      if (sum === S) {
        console.log("정답!!!!");
        result++;
      }
    }

    for (let i = start; i < N; i++) {
      console.log("------------------");
      console.log("i :>> ", i);
      console.log("testCase[i] :>> ", testCase[i]);
      temp.push(testCase[i]);
      console.log("temp 에 넣었다!");
      console.log("temp :>> ", temp);
      백트래킹(i + 1);
      console.log("pop 합니다");
      temp.pop();
      console.log("temp :>> ", temp);
    }
    console.log("for 문 끝");
  };

  백트래킹(0);

  return result;
}

console.log(solution(input));
