from itertools import combinations

def solution(nums):

    # 소수 갯수
    count = 0

    # 조합으로 3개의 경우의 수 구하기
    data = combinations(nums, 3)

    for i in data:
        data_sum = sum(i)

        prime = prime_check(data_sum)

        if prime == True:
            count += 1

    return count

def prime_check(data_sum):
    for i in range(2, data_sum):
        if data_sum % i == 0:
            return False # 소수 아니다.
    return True # 소수다
