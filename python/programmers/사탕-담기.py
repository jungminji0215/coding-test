# 조합 사용
from itertools import combinations

def solution(m, weights):
    count = 0
    for i in range(1,len(weights) - 1):
        for j in combinations(weights, i):
            if sum(j) == m:
                count += 1
 
    return count
