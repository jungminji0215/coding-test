function solution(arr) {
  if (arr.length === 1) return [-1];

  // 작은 거 찾기
  let minValue = Math.min(...arr);

  return arr.filter((num) => {
    num !== minValue;
  });
}

console.log(solution([10]));
