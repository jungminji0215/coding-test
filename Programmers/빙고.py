def solution(board, nums):
    
    bingo_count = 0

    for i in range(len(board)):
        # set 함수 사용해서 공통숫자 뽑아서 리스트로 만들고
        # common(공통) 변수에 리스트를 저장 

        common = list(set(board[i]) & set(nums))

        for j in common:
            index = board[i].index(j)
            board[i][index] = 0
  
    '''
    [[0, 0, 0, 0], 
    [12, 0, 0, 0], 
    [10, 0, 7, 8], 
    [0, 0, 6, 9]]
    '''

    # 가로 빙고 구하기
    for i in board:
        bingo_check = True
        for j in i:
            if j != 0:
                bingo_check = False
                break
        if bingo_check == True:
            bingo_count += 1

    # 세로 빙고 구하기
    for i in range(len(board)):
        bingo_check = True
        for j in range(len(board)):
            if board[j][i] != 0:
                bingo_check = False
                break

        if bingo_check == True:
            bingo_count += 1

    # 대각선1
    for i in range(len(board)):
        bingo_check = True
        if board[i][i] != 0:
            bingo_check = False
            break    
    if bingo_check == True:
        bingo_count += 1  

    # 대각선2
    for i in range(len(board)):
        bingo_check = True
        if board[i][len(board)-1-i] != 0:
            bingo_check = False
            break

    if bingo_check == True:
        bingo_count += 1    

    return bingo_count
