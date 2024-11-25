import java.util.*;

class Main {
    static String solution(String first, String second) {
        String tmp = "";

        for(int i = 0; i < second.length(); i++){
            for(int j = 0; j < first.length(); j++){
                if(second.charAt(i) == first.charAt(j)){
                    tmp += first.charAt(j);
                }
            }
        }

        if(tmp.equals(first)){
            return "YES";
        }
        else return "NO";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String first = scanner.nextLine(); // CBA
        String second = scanner.nextLine(); // CBDAGE

        System.out.println(solution(first, second));
    }
}
