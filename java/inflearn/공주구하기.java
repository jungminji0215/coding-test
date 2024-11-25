import java.util.*;

class Main {
    static int solution(int N, int K) {
        Queue<Integer> queue = new LinkedList<>();
        int check = 0;

        for(int i = 1; i <= N; i++){
            queue.add(i);
        }

        while (queue.size() > 1){
            check++;
            int tmp = queue.poll();

            if (check != K) {
                queue.add(tmp);
            } else {
                check = 0;
            }
        }
        return queue.poll();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int K = scanner.nextInt();

        System.out.println(solution(N, K));
    }
}
