import java.util.ArrayList;
import java.util.Stack;

class Main {
    public static int solution(String str) {
        int answer = 0;
        Stack<Integer> stack = new Stack<Integer>();

        for(char x : str.toCharArray()){
            if(Character.isDigit(x)){
                stack.push(x-48);
            }else{
                int second = stack.pop();
                int first = stack.pop();

                if(x == '+'){
                    stack.push(first + second);
                }else if (x == '-') {
                    stack.push(first - second);
                }else if (x == '*') {
                    stack.push(first * second);
                }else if (x == '/') {
                    stack.push(first / second);
                }
            }
        }
        answer = stack.get(0);
        return answer;
    }

    public static void main(String[] args) {
        System.out.println(solution("352+*9-"));
    }
}
