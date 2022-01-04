def solution(skill, skill_trees):
    count = 0

    for i in skill_trees:
        index = 0
        check = True
        for j in i:
            if check == False:
                break
            elif j in skill:
                print(j)
                if skill[index] == j:
                    index += 1
                else:
                    check = False
                    
        if check == True:
            count += 1

    return count
