const solution = (arr, divisor) =>
  (result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b))
    .length
    ? result
    : [-1];

console.log(solution([5, 9, 7, 10], 5));
