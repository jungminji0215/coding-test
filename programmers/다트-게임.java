class Solution {

    int[] scoreList = new int[3];
    int listIndex = 0;
    int score = 0;

    public int solution(String dartResult) {
        String newDartResult = dartResult.replace("10", "A");

        for(int i = 0; i < newDartResult.length(); i ++ ){
            char ch = newDartResult.charAt(i);

            if(Character.isDigit(ch) || ch == 'A'){
                if(ch == 'A'){
                    score = 10;
                }else{
                    score = Integer.parseInt(String.valueOf(ch));
                }
            }else{
                switch (ch){
                    case 'S':
                        scoreList[listIndex] = score;
                        listIndex += 1;
                        break;
                    case 'D':
                        scoreList[listIndex] = (score * score);
                        listIndex += 1;
                        break;
                    case 'T':
                        scoreList[listIndex] = (score * score * score);
                        listIndex += 1;
                        break;
                    case '*':
                        if(i == 2){
                            scoreList[0] = (scoreList[0] * 2);
                        }else{
                            scoreList[listIndex - 2] = (scoreList[listIndex - 2] * 2);
                            scoreList[listIndex - 1] = (scoreList[listIndex - 1] * 2);
                        }
                        break;
                    case '#':
                        scoreList[listIndex - 1] = (scoreList[listIndex - 1] * (-1));
                }
            }
        }
        return IntStream.of(scoreList).sum();
    }
}
