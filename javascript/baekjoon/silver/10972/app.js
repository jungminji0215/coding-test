const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nextPermutation = (arr) => {
  // 1. 감소하는 부분(피벗)을 찾는다.
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  // 만약 i가 음수이면 이미 가장 큰 순열이므로 -1 출력
  if (i < 0) {
    return -1;
  }

  // 2. 피벗보다 큰 수 중 오른쪽 끝에서 가장 작은 수(j)를 찾는다.
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) {
    j--;
  }

  // 3. 피벗(arr[i])과 arr[j]를 교환
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // 4. i+1부터 배열 끝까지의 부분을 반전(오름차순 정렬)
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join(" ");
};

function solution(input) {
  const arr = input[1].split(" ").map(Number);

  return nextPermutation(arr);
}

console.log(solution(input));
