const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const previousPermutation = (arr) => {
  const n = arr.length;

  // 1. 피벗 찾기: 오른쪽부터 왼쪽으로 이동하며,
  //    arr[i-1] > arr[i]를 만족하는 첫 인덱스 i를 찾는다.
  let i = n - 1;
  while (i > 0 && arr[i - 1] <= arr[i]) {
    i--;
  }

  // 만약 i가 0이면, 배열이 오름차순 정렬되어 있으므로 이전 순열이 없다.
  if (i === 0) return false;

  // 피벗 인덱스
  const pivot = i - 1;

  // 2. 피벗보다 작은 원소 중, 가장 오른쪽에 있는 원소 찾기
  let j = n - 1;
  while (arr[j] >= arr[pivot]) {
    j--;
  }

  // 3. 피벗과 해당 원소를 교환
  [arr[pivot], arr[j]] = [arr[j], arr[pivot]];

  // 4. 피벗의 오른쪽 부분을 역순 정렬 (내림차순 정렬)
  let left = i;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

function solution(input) {
  const arr = input[1].split(" ").map(Number);

  const result = previousPermutation(arr);

  if (result === false) {
    return -1;
  } else {
    return result.join(" ");
  }
}

console.log(solution(input));
