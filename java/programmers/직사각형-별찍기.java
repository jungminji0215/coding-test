import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Solution {

    static int n,m;

    public static void main(String[] args) throws IOException {
        input();

        for(int i = 0; i < m; i++){
           
            for(int j = 0; j < n; j++){
                System.out.print("*");
            }
             System.out.println();
        }
    }

    private static void input() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
    }
}
