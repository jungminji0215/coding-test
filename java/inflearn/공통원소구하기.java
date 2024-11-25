import java.util.*;

class Main {
    static ArrayList<Integer> solution(int[] arrA, int[] arrB, int N, int M) {
        ArrayList<Integer> result = new ArrayList<>();

        Arrays.sort(arrA);
        Arrays.sort(arrB);

        int pA = 0;
        int pB = 0;

        while (pA < N && pB < M){
            if(arrA[pA] == arrB[pB]){
                result.add(arrA[pA]);
                pA++;
                pB++;
            } else if (arrA[pA] < arrB[pB]) {
                pA++;
            } else if (arrB[pB] < arrA[pA]) {
                pB++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);

        int N = 5;
        int[] arrA = {1,3,9,5,2};

        int M = 5;
        int[] arrB = {3,2,5,7,8};

        System.out.println(solution(arrA, arrB, N, M));
    }
}
