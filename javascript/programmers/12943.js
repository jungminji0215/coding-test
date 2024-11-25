function solution(num) {
  if (num === 1) {
    return 0;
  }

  let tryCount = 0;
  let result = 0;

  while (true) {
    tryCount++;

    // 짝수 계산식
    if (num % 2 === 0) {
      num = num / 2;
    }
    // 홀수 계산식
    else {
      num = num * 3 + 1;
    }

    if (num === 1) {
      return tryCount;
    }

    if (tryCount === 500) {
      return -1;
    }
  }
}

console.log(solution(626331));

// function solution() {
//   let num = 0;

//   while (true) {
//     console.log("실행 : ", num);
//     if (num === 2) {
//       return num;
//     }

//     num++;
//   }
// }

// console.log(solution());
