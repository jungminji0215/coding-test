// const solution = (n) => {
//   let temp = n - 1;

//   for (let i = 2; i <= temp; i++) {
//     if (temp % i === 0) {
//       return i;
//     }
//   }
// };

// console.log(solution(10));

/**
 * 
이 코드는 n-2 길이의 배열을 생성하고, 
각 요소는 2부터 n-1까지의 숫자로 채워진다.
그런 다음, (n-1) % i === 0이 되는 첫 번째 요소를 찾아 반환한다.
 */
const solution = (n) =>
  Array.from({ length: n - 2 }, (_, i) => i + 2).find((i) => (n - 1) % i === 0);
