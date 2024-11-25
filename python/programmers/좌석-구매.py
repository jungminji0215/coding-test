# 프로그래머스 스쿨

def solution(seat):
    answer = list(set(map(tuple,seat)))

    return len(answer)
