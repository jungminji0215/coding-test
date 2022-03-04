import java.util.Arrays;
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
    public static int N;
    public static int[][] graph;
    public static int[] dx = {-1, 1, 0, 0};
    public static int[] dy = {0, 0, -1, 1};
    public static int danNum;
    private static int[] apartNum = new int[25*25];

    // 입력 받기
    private static void input() {
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        sc.nextLine();

        graph = new int[N][N];

        for(int i = 0; i < N; i++){
            String str = sc.nextLine();
            for(int j = 0; j < N; j++){
                graph[i][j] = str.charAt(j) - '0';
            }
        }
    }

    // bfs
    private static void bfs(int x, int y) {
        Queue<Node> queue = new LinkedList<Node>();
        queue.offer(new Node(x,y));
        apartNum[danNum]++;

        while(!queue.isEmpty()){
            Node node = queue.poll();
            x = node.getX();
            y = node.getY();

            for(int i = 0; i < 4; i++){
                int nx = x + dx[i];
                int ny = y + dy[i];

                if(nx < 0 || nx >= N || ny < 0 || ny >= N){
                    continue;
                }

                if(graph[nx][ny] == 0){
                    continue;
                }

                if(graph[nx][ny] == 1){
                    graph[nx][ny] = 0;
                    queue.offer(new Node(nx, ny));
                    apartNum[danNum]++;
                }
            }
        }
    }

    public static void main(String[] args) {
        input();

        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                if(graph[i][j] == 1){
                    graph[i][j] = 0;
                    danNum ++;
                    bfs(i,j);
                }
            }
        }

        Arrays.sort(apartNum);
        System.out.println(danNum);

        for(int i = 0; i< apartNum.length; i++){
            if(!(apartNum[i] == 0)){
                System.out.println(apartNum[i]);
            }
        }
    }
}
