import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Main {
    static StringBuilder sb = new StringBuilder();
    static int N, M;
    static int[] arr;

    static void input() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        arr = new int[M];
    }

    static void rec_func(int depth) {

        if (depth == M ) {

            for (int value : arr) {
                sb.append(value).append(' ');
            }
            sb.append('\n');
            return;

        } else {
            for (int i = 1; i <= N; i++) {
                arr[depth] = i;
                rec_func(depth + 1);
            }
        }
    }

   public static void main(String[] args) throws IOException {
       input();
       rec_func(0);
       System.out.println(sb.toString());
    }
}
