import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    static int N, M;
    static int result = Integer.MAX_VALUE;
    static Integer[] coin;

    public static void solution(int L, int sum){
        if(sum > M){
            return;
        }

        if(L >= result){
            return;
        }

        if(sum == M){
//            if(result > L){
//                result = L;
//            }
            result = Math.min(result, L);
        }else {
            for(int i = 0; i < N; i++){
                solution(L+1, sum+coin[i]);
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        N = scanner.nextInt();

        coin = new Integer[N];

        for(int i = 0; i < N; i++){
            coin[i] = scanner.nextInt();
        }

        Arrays.sort(coin, Collections.reverseOrder());

        M = scanner.nextInt();


        solution(0,0);
        System.out.println(result);
    }
}
