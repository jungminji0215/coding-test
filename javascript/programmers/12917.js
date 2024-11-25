function solution(s) {
  const arr = Array.from(s);

  return arr.sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
