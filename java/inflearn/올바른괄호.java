import java.util.Scanner;
import java.util.Stack;


public class Main {

    public static String solution(String str){
        String answer = "YES";
        Stack<Character> stack = new Stack<>();

        for(char c : str.toCharArray()){
            if(c == '('){
                stack.push(c);
            } else{
                if(stack.isEmpty()){
                    return "NO";
                }
                stack.pop();
            }
        }
        if (!stack.isEmpty()){
            return "NO";
        }
        return answer;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        System.out.println(solution(str));
    }
}
