function solution(graph, start) {
  // ❶ 그래프를 인접 리스트로 변환
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  console.log("인접리스트 : ", adjList);

  //   console.log("인접리스트입니다 : ", adjList);

  // ❷ DFS 탐색 함수
  function dfs(node, visited, result) {
    console.log("-----------------------------");
    console.log("방문체크하러 온 손님 : ", node);
    visited.add(node); // ❸ 현재 노드를 방문한 노드들의 집합에 추가
    console.log("방문 체크 : ", visited);

    result.push(node); // ❹ 현재 노드를 결과 리스트에 추가
    console.log("result : ", result);

    console.log("adjList[node] : ", adjList[node]);

    (adjList[node] || []).forEach((neighbor) => {
      console.log(neighbor);
      // ❺ 현재 노드와 인접한 노드 순회
      if (!visited.has(neighbor)) {
        // ❻ 아직 방문하지 않은 노드라면
        dfs(neighbor, visited, result);
      }
    });
  }

  // DFS를 순회한 결과를 반환
  const visited = new Set();

  const result = [];
  // "A" , set, []
  dfs(start, visited, result); // ❼ 시작 노드에서 깊이 우선 탐색 시작

  return result; // ❽ DFS 탐색 결과 반환
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
); // 반환값 : ['A', 'B', 'C', 'D', 'E']
//   console.log(solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A')) // 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']
