function solution(seoul) {
  const kimIndex = seoul.findIndex((str) => {
    console.log(str);
    console.log(typeof str);
    return str === "Kim";
  });
  return `김서방은 ${kimIndex}에 있다`;
}

console.log(solution(["Jane", "Kim"]));
