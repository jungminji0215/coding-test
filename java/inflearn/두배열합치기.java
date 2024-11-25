import java.util.*;

class Main {
    static ArrayList<Integer> solution(int[] arrA, int[] arrB, int N, int M) {
        ArrayList<Integer> result = new ArrayList<>();

        int pA = 0;
        int pB = 0;

        while (pA < N && pB < M){
            if(arrA[pA] < arrB[pB]){
                result.add(arrA[pA++]);
            } else {
                result.add(arrB[pB++]);
            }
        }

        while (pA < N) result.add(arrA[pA++]);
        while (pB < M) result.add(arrB[pB++]);

        return result;
    }

    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);

        int N = 3;
        int[] arrA = {1,3,5};

        int M = 5;
        int[] arrB = {2,3,6,7,9};
        
        System.out.println(solution(arrA, arrB, N, M));
    }
}
