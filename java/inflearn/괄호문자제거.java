import java.util.Scanner;
import java.util.Stack;


public class Main {
    public static void solution(String str){
        Stack<Character> stack = new Stack<>();
        String answer = "";

        for(char x : str.toCharArray()){
            if(x == '('){
               stack.push(x);
            } else {
                if(stack.isEmpty()){
                    System.out.print(x);
                }

                if(x == ')'){
                    stack.pop();
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        solution(str);
//        solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
    }
}
