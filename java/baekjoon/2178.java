import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Node{
    private int x, y;

    public Node(int x, int y){
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
public class Main {
    public static int N, M;
    public static int[][] graph = new int[101][101];
    public static int dx[] = {-1, 1, 0, 0};
    public static int dy[] = {0, 0, -1, 1};

    // 입력 받기
    private static void input() {
        Scanner scanner = new Scanner(System.in);

        N = scanner.nextInt();
        M = scanner.nextInt();
        scanner.nextLine();

        for(int i = 0; i < N; i++){
            String str = scanner.nextLine();
            for(int j = 0; j < M; j++){
                graph[i][j] = str.charAt(j) - '0';
            }
        }
    }

    // bfs
    private static int bfs(int x, int y) {
        Queue<Node> queue = new LinkedList<Node>();

        queue.offer(new Node(x, y));

        while(!queue.isEmpty()){
            Node node = queue.poll();

            x = node.getX();
            y = node.getY();

            for(int i = 0; i < 4; i++){
                int nx = x + dx[i];
                int ny = y + dy[i];

                if(nx < 0 || nx >= N || ny < 0 || ny >= M){
                    continue;
                }

                if (graph[nx][ny] == 0) {
                    continue;
                }

                if(graph[nx][ny] == 1){
                    graph[nx][ny] = graph[x][y] + 1;
                    queue.offer(new Node(nx, ny));
                }
            }
        }
        return graph[N-1][M-1];
    }

    public static void main(String[] args) {
        input();
        System.out.println(bfs(0,0));
    }
}
