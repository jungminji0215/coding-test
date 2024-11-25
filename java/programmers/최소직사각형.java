import java.util.Arrays;

class Solution {
    static int solution(int[][] sizes) {
        int answer ;


        for (int[] size : sizes) {
            Arrays.sort(size);
        }

        int maxA = sizes[0][0];
        for(int i = 1; i < sizes.length; i++){

            if(maxA < sizes[i][0]){
                maxA = sizes[i][0];
            }
        }

        int maxB = sizes[0][1];
        for(int i = 1; i < sizes.length; i++){

            if(maxB < sizes[i][1]){
                maxB = sizes[i][1];
            }
        }

        answer = maxA * maxB ;

        return answer;
    }
}
