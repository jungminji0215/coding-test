import java.util.Scanner;

public class Main {
    public static int solution(int n){
        if(n==1) return 1;
        else return n*solution(n-1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println(solution(5));
    }
}
