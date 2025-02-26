// TODO 나중에 혼자서 다시 풀어봐야 함

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]); // 4 (도시 4개))

  // const route = Array.from({ length: N }, (_, i) => i + 1);
  // route.push(1);

  // 비용 행렬 생성 (0번 인덱스를 시작 도시로 사용)
  const cityCost = input.slice(1).map((line) => line.split(" ").map(Number));
  console.log("cityCost :>> ", cityCost);

  // 방문 여부 배열 (0번 도시부터 N-1번 도시까지)
  const visited = new Array(N).fill(false);
  visited[0] = true;

  let minCost = Infinity; // 최소 비용을 저장할 변수

  /**
   * current : 현재 방문한 도시의 인덱스
   * count : 시작 도시를 제외하고 방문한 도시 수(0부터 시작)
   * costSoFar : 지금까지 누적된 비용
   */
  const 백트래킹 = (current, count, costSoFar) => {
    console.log("-------------------------");
    console.log("current :>> ", current);
    console.log("count :>> ", count);

    // 모든 도시를 방문한 경우
    if (count === N - 1) {
      console.log("<< 모든 도시 다 방문 >>");
      // 현재 도시에서 시작 도시(인덱스 0)로 돌아갈 수 있는지 확인
      console.log("cityCost[current][0] :>> ", cityCost[current][0]);
      if (cityCost[current][0] > 0) {
        console.log("비용 계산");
        minCost = Math.min(minCost, costSoFar + cityCost[current][0]);
        console.log("minCost :>> ", minCost);
      }
      return;
    }

    // 아직 방문하지 않은 도시를 순회하며 다음 도시 선택
    for (let next = 1; next < N; next++) {
      // 아직 방문하지 않았고, 이동 가능한 경로가 존재하는 경우
      console.log("== 아직 방문할 곳이 남아 있음 ==");
      console.log("visited :>> ", visited);
      console.log("current :>> ", current);
      console.log("next :>> ", next);
      console.log("cityCost[current][next] :>> ", cityCost[current][next]);

      if (!visited[next] && cityCost[current][next] > 0) {
        console.log("방문 조건 부합");
        visited[next] = true; // 다음 도시 방문 처리
        백트래킹(next, count + 1, costSoFar + cityCost[current][next]);
        visited[next] = false; // 백트래킹: 방문 처리 취소
      }
    }
  };
  백트래킹(0, 0, 0);

  return minCost;
}

console.log(solution(input));
