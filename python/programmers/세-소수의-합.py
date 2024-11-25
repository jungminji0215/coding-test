import math
from itertools import combinations

def solution(n):
    prime_number = []
    answer = 0

    array = [True for i in range(n + 1)]

    for i in range(2, int(math.sqrt(n)) + 1):
        if array[i] == True:
            j = 2
            while i * j <= n:
                array[i * j] = False
                j += 1

    # False 아닌 것들만 prime_number 리스트에 넣기 
    for i in range(2, n + 1):
        if array[i]:s
             prime_number.append(i)

    # 조합 사용
    # 중복 허용하지 않고 r개 뽑는다.
    # combinations(반복 가능한 객체, r)
    for i in combinations(prime_number, 3):
        if sum(i) == n:
            answer += 1

    return answer

# print(solution(33))
