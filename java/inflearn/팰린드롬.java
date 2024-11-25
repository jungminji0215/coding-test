import java.util.*;
public class Main {

    static String solution(String str){
        String answer = "YES";
        String regExpAlpha = str.replaceAll("[^a-zA-Z]", "");
        String strLower = regExpAlpha.toLowerCase();

        for(int i = 0; i < str.length()/2; i++){
            int left = strLower.charAt(i);
            int right = strLower.charAt(strLower.length()-1-i);

            if(left != right){
                return "NO";
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();

        System.out.println((solution(str)));
    }
}
