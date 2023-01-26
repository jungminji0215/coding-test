import java.util.Stack;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        
        Stack<Integer> stack = new Stack<>();

        for(int i = 0; i < moves.length; i++){
            for(int j = 0; j < board.length; j++){

                if(board[j][moves[i]-1] != 0){ // 인형 발견 
                    int tmp = board[j][moves[i]-1];
                    board[j][moves[i]-1] = 0;

                    if(!stack.isEmpty() && tmp == stack.peek()){
                        answer += 2;
                        stack.pop();
                    } else {
                        stack.push(tmp);
                    }
                    break;
                }
            }
        }
        return answer;
    }
}
