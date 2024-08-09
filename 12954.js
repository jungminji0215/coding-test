// function solution(x, n) {
//   var answer = [];
//   let num = x;

//   for (let i = 0; i < n; i++) {
//     answer.push(num);
//     num += x;
//   }

//   return answer;
// }

function solution(x, n) {
  let test = Array(n).fill(x);
  let test2 = test.map((v, i) => {
    console.log("==========");
    console.log(v);
    console.log(i);
    return (i + 1) * v;
  });

  console.log(test);
  console.log(test2);

  return test2;
}

solution(2, 5);
