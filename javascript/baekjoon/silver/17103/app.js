const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const 소수찾기 = (n) => {
  let primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
};

function solution(input) {
  const T = input[0];
  const numbers = input.slice(1);
  const maxNumber = Math.max(...numbers);

  const isPrime = 소수찾기(maxNumber);
  const primes = [];
  for (let i = 2; i <= maxNumber; i++) {
    if (isPrime[i]) primes.push(i);
  }

  let result = [];

  for (let i = 0; i < T; i++) {
    const n = numbers[i];
    let count = 0;

    for (let j = 0; primes[j] <= n / 2; j++) {
      let p = primes[j];
      let q = n - p;

      if (isPrime[q]) count++; // q가 소수라면 골드바흐 파티션 한 쌍
    }

    result.push(count);
  }

  return result.join("\n");
}

console.log(solution(input));
