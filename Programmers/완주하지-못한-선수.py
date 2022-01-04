from collections import Counter

def solution(participant, completion):
    answer = Counter(participant) - Counter(completion)
    a = list(answer)
    return a[0]
