class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        int sum = 0;

        // 숫자를 문자열로 변경
        String str = String.valueOf(x);

        for(int i = 0; i < str.length(); i++){
            // 문자열에서 문자를 뽑기
            char ch = str.charAt(i);
            
            // 문자를 정수로 변경
            int num = Character.getNumericValue(ch);
            
            // 더해주기
            sum += num;
        }

        if((x % sum) != 0){
            answer = false;
        }
        return answer;
    }
}
