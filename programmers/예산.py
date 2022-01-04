def solution(d, budget):
    count = 0
    
    d.sort()

    for i in range(len(d)):
        if budget - d[i] >= 0:
            budget = budget - d[i]
            count += 1

        if budget < 0:
            break
    return count 



d = [1,3,2,5,4]
budget = 9

print(solution(d, budget))