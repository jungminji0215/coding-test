function solution(n) {
  let nToString = Array.from(String(n), Number);

  let sortArr = nToString.sort((a, b) => {
    return b - a;
  });

  return Number(sortArr.join(""));
}

console.log(solution(118372));
