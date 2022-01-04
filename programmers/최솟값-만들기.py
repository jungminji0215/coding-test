# 최솟값 만들기
def solution(A,B):
    A.sort()
    B.sort(reverse = True)

    mul_plus = 0

    for i in range(len(A)):
        mul_plus += A[i] * B[i]

    return mul_plus
