import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int N, M;
    static StringBuilder sb = new StringBuilder();
    static int[] arr;

    public static void main(String[] args) throws IOException {
        input();
        rec_func(0,1);
        System.out.println(sb.toString());
    }

    static void input() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        arr = new int[M];
    }

    static void rec_func(int depth, int start){
        if(depth == M){
            for(int value : arr){
                sb.append(value).append(' ');
            }
            sb.append('\n');
            return;
        }else {
            for(int i = start; i <= N; i++){
                arr[depth] = i;
                rec_func(depth + 1, i);
            }
        }
    }
}
