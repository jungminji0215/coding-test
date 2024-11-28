import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static StringBuilder sb = new StringBuilder();
    static int N, M;
    static int[] selected;
    static int [] visited;

    static void input() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        selected = new int[M];
        visited = new int[N + 1];
    }

    static void rec_func(int depth) {

        if (depth == M ) {

            for (int value : selected) {
                sb.append(value).append(' ');
            }
            sb.append('\n');
            return;
        } else {
            for (int i = 1; i <= N; i++) {

                if(visited[i] != 1){
                    selected[depth] = i;
                    visited[i] = 1;
                    rec_func(depth + 1);
                    visited[i] = 0;
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        input();
        rec_func(0);
        System.out.println(sb.toString());
    }
}
