import java.util.*;
public class Main {

    static int solution(int N, int M, int[] num){
        int answer = 0;
        int sum= 0;
        int lt = 0;

        for(int rt = 0; rt < N; rt++){
            sum+=num[rt];

            if(sum==M){
                answer += 1;
            }

            while (sum >= M){
                sum -= num[lt++];
                if(sum==M) answer++;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = 8;
        int M = 6;
        int[] num = {1,2,1,3,1,1,1,2};

        System.out.println((solution(N, M, num)));
    }
}
