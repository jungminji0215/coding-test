const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // 총 인원 수
  const N = Number(input[0]);
  // 각 팀원들의 능력치 행렬
  const ability = input.slice(1).map((a) => a.split(" ").map(Number));

  let minDiff = Infinity;
  const startTeam = [];

  const 백트래킹 = (start) => {
    // 팀 구성이 공집합이 아니고 전체가 아닐 때, 점수 계산
    if (startTeam.length >= 1 && startTeam.length < N) {
      // 스타트팀 점수 계산
      let startScore = 0;
      for (let i = 0; i < startTeam.length; i++) {
        for (let j = i + 1; j < startTeam.length; j++) {
          startScore +=
            ability[startTeam[i]][startTeam[j]] +
            ability[startTeam[j]][startTeam[i]];
        }
      }

      // 링크팀 구하기 (전체 인원 중 스타트팀에 없는 멤버)
      const linkTeam = [];
      for (let i = 0; i < N; i++) {
        if (!startTeam.includes(i)) {
          linkTeam.push(i);
        }
      }

      // 링크팀 점수 계산
      let linkScore = 0;
      for (let i = 0; i < linkTeam.length; i++) {
        for (let j = i + 1; j < linkTeam.length; j++) {
          linkScore +=
            ability[linkTeam[i]][linkTeam[j]] +
            ability[linkTeam[j]][linkTeam[i]];
        }
      }

      // 최소 차이 갱신
      const diff = Math.abs(startScore - linkScore);
      minDiff = Math.min(minDiff, diff);

      // 최소 차이가 0이면 더 이상 볼 필요 없음 (최적해)
      if (minDiff === 0) {
        console.log(0);
        process.exit(0);
      }
    }

    // 백트래킹: i번째 멤버를 선택
    for (let i = start; i < N; i++) {
      startTeam.push(i);
      백트래킹(i + 1);
      startTeam.pop();
    }
  };

  백트래킹(0);

  return minDiff;
}

console.log(solution(input));
