import java.util.*;

// 조합 구하는 법 그냥 외우삼
class Main {
    static int[] combi;
    static int n, m;

    static void DFS(int level, int start) {
        if(level == m){
            for(int x : combi) System.out.print(x + " ");
            System.out.println();

        }
        else {
            for(int i = start; i <= n; i++){
                combi[level] = i;
                DFS(level+1, i+1);
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        n = 4;
        m = 2;

        combi = new int[m];

        DFS(0,1); // Level, start
    }
}
