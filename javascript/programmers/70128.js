function solution(a, b) {
  return a.reduce((acc, _, i) => {
    console.log("----------------");
    console.log(acc);
    console.log(i);
    return (acc += a[i] * b[i]);
  }, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
