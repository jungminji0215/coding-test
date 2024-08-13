function solution(n) {
  let newString = n + "";
  var answer = [];

  for (let i = newString.length - 1; i >= 0; i--) {
    answer.push(Number(newString[i]));
  }

  return answer;
}

console.log(solution(12345));
