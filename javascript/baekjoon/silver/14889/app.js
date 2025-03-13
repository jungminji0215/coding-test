const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const half = N / 2;
  const ability = input.slice(1).map((line) => line.split(" ").map(Number));
  let minDiff = Infinity;
  const team = []; // start팀에 속하는 사람들의 인덱스

  function backtrack(start) {
    // 팀원 수가 반이 되면 나머지 인원은 링크팀
    if (team.length === half) {
      const team1 = team;
      const team2 = [];
      for (let i = 0; i < N; i++) {
        if (!team1.includes(i)) team2.push(i);
      }

      let score1 = 0,
        score2 = 0;
      // 팀 내 모든 쌍의 점수를 더함
      for (let i = 0; i < half; i++) {
        for (let j = i + 1; j < half; j++) {
          score1 += ability[team1[i]][team1[j]] + ability[team1[j]][team1[i]];
          score2 += ability[team2[i]][team2[j]] + ability[team2[j]][team2[i]];
        }
      }
      const diff = Math.abs(score1 - score2);
      if (diff === 0) {
        // 최소 차이가 0이면 더 이상 볼 필요 없음.
        console.log(0);
        process.exit(0);
      }
      minDiff = Math.min(minDiff, diff);
      return;
    }

    // start부터 탐색하며 팀원 선택 (중복 조합 제거)
    for (let i = start; i < N; i++) {
      team.push(i);
      backtrack(i + 1);
      team.pop();
    }
  }

  backtrack(0);
  return minDiff;
}

console.log(solution(input));
