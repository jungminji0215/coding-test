import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stringTokenizer = new StringTokenizer(bufferedReader.readLine());

        int numA = Integer.parseInt(stringTokenizer.nextToken());
        int numB = Integer.parseInt(stringTokenizer.nextToken());

        long[] arraySum = new long[numA + 1];

        stringTokenizer = new StringTokenizer(bufferedReader.readLine());

        for(int i = 1; i <= numA; i++){
            arraySum[i] = arraySum[i - 1] + Integer.parseInt(stringTokenizer.nextToken());
        }

        for(int q = 0; q < numB; q++){
            stringTokenizer = new StringTokenizer(bufferedReader.readLine());

            int i = Integer.parseInt(stringTokenizer.nextToken());
            int j = Integer.parseInt(stringTokenizer.nextToken());
            System.out.println(arraySum[j] - arraySum[i-1]);
        }
    }
}
