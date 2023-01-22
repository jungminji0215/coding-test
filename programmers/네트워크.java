import java.util.LinkedList;
import java.util.Queue;

class Main {
    static boolean[] visited; // 기본이 false로 초기화
    static void bfs(int network, int n, int[][] computers){
        Queue<Integer> queue = new LinkedList<>();

        queue.add(network);

        while (!queue.isEmpty()){
            int tmp = queue.poll();

            for(int i = 0; i < n; i++){
                if(!visited[i] && computers[tmp][i] == 1){
                    queue.add(i);
                    visited[i] = true;
                }
            }
        }
    }

    static int solution(int n, int[][] computers) {
        int answer = 0;

        visited = new boolean[n];

        for(int i = 0; i < n; i++){
            if(!visited[i]){
                visited[i] = true;
                answer += 1;
                bfs(i, n, computers);
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int n = 3;
        int[][] computers = new int[][]{{1,1,0},{1,1,0},{0,0,1}};
//        int[][] computers = new int[][]{{1,1,0,1},{1,1,0,0},{1,0,0,1}};
        System.out.println(solution(n,computers));
    }
}
