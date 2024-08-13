function solution(n) {
  // 먼저 제곱근 구하기
  let squrtNum = Math.sqrt(n);
  console.log(squrtNum);

  // 구한 값이 정수이면
  if (Number.isInteger(squrtNum)) {
    return (squrtNum + 1) * (squrtNum + 1);
  }

  // 정수가 아니면
  return -1;
}

console.log(solution(121));
