class Main {
    static int answer = 100;
    static boolean[] visited;

    public static void dfs(String begin, String target, String[] words, int L){
        if(begin.equals(target)){
            answer = Math.min(answer, L);
        }

        if(L > words.length){
            return;
        }

        for(int i = 0; i < words.length; i++){
            if(visited[i]){
                continue;
            }

            int check = 0;

            for(int j = 0; j < begin.length(); j++){
                if(begin.charAt(j) == words[i].charAt(j)){
                    check += 1;
                }
            }

            if(check == begin.length()-1){
                visited[i] = true;
                dfs(words[i], target, words, L+1);
                visited[i] = false;
            }
        }
    }

    public static int solution(String begin, String target, String[] words) {
        visited = new boolean[words.length];
        dfs(begin, target, words, 0);

        if(answer == 100){
            return 0;
        }
        return answer;
    }

    public static void main(String[] args) {
        String[] str = new String[]{"hot", "dot", "dog", "lot", "log", "cog"};
        System.out.println(solution("hit", "cog", str));
    }
}
