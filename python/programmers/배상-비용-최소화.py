def solution(no, works):
    
    result = 0
    
    while no:
        works.sort()
        if works[-1] == 0:
            break
        works[-1] -= 1
        no -= 1
    
    for i in works:
        result += (i * i)

    return result
