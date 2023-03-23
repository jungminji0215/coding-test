import java.util.Arrays;

public class Main {
    public static int[] solution(String str, char t){
        int[] answer = new int[str.length()];

        int p = 1000;

        for(int i = 0; i < str.length(); i++){
            if(str.charAt(i) == t){
                p = 0;
                answer[i] = 0;
            } else {
                p++;
                answer[i] = p;
            }
        }

        p = 1000;

        for(int i = str.length()-1; i >= 0; i--){
            if(str.charAt(i) == t){
                p = 0;
                answer[i] = 0;
            } else {
                p++;
                if(answer[i] > p){
                    answer[i] = p;
                }
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        String str = "teachermode";
        char t = 'e';

        System.out.println(Arrays.toString(solution(str, t)));
    }
}
