def solution(answers):
    score = []
    winner = []
    
    student = [[1,2,3,4,5] ,
               [2, 1, 2, 3, 2, 4, 2, 5] ,
               [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    for i in range(3):
        count = 0

        for j in range(len(answers)):
            if answers[j] == (student[i][j % len(student[i])]):
                count += 1 
                
        score.append(count)

    for i in range(3):
        if score[i] == max(score):
            winner.append(i+1)
            
    return winner
