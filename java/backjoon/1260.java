import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static boolean[] visited;
    static int[][] graph;
    static int N;
    static int M;
    static int V;

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stringTokenizer = new StringTokenizer(bufferedReader.readLine());

        N = Integer.parseInt(stringTokenizer.nextToken());
        M = Integer.parseInt(stringTokenizer.nextToken());
        V = Integer.parseInt(stringTokenizer.nextToken());

        graph = new int[N+1][N+1];
        visited = new boolean[N+1];

        for(int i = 1; i <= M; i++){
            stringTokenizer = new StringTokenizer(bufferedReader.readLine());
            int x = Integer.parseInt(stringTokenizer.nextToken());
            int y = Integer.parseInt(stringTokenizer.nextToken());

            graph[x][y] = graph[y][x] = 1;
        }

        dfs(V);

        visited = new boolean[N+1];
        System.out.println();

        bfs(V);
    }

    public static void dfs(int i){
        visited[i] = true;
        System.out.print(i + " ");

        for(int j = 1; j <= N; j++){
            if(graph[i][j] == 1 && !visited[j]){
                dfs(j);
            }
        }
    }

    public static void bfs(int start){
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited[start] = true;

        while(!queue.isEmpty()){
            int temp = queue.poll();
            System.out.print(temp + " ");

            for(int i = 1; i <= N; i ++){
                if(graph[temp][i] == 1 && !visited[i]){
                    queue.add(i);
                    visited[i] = true;
                }
            }
        }
    }
}
