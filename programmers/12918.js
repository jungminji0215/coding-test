function solution(s) {
  if (
    (s.length === 4 || s.length === 6) &&
    Array.from(s).find((str) => {
      return isNaN(Number(str));
    }) === undefined
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution("a234"));

const test = "1";

console.log(isNaN(Number(test)));
