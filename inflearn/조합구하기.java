import java.util.*;

// 조합 구하는 법 그냥 외우삼
class Main {
    static int[] combi;
    static int N, M;

    static void dfs(int level, int start) {
        if(level == M){
            for(int x : combi) System.out.print(x + " ");
            System.out.println();

        } else {
            for(int i = start; i <= N; i++){
                combi[level] = i;
                dfs(level+1, start+1);
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        N = 4;
        M = 2;

        combi = new int[M];

        dfs(0,1); // Level, start
    }
}
