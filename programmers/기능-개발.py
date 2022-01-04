# 테스트 케이스 몇개 실패 - 개선 필요 

def solution(progresses, speeds):
    answer = [] 
    a = 0

    while(progresses):

        for i in range(len(progresses)):
            if progresses[i] >= 100:
                continue
            else:
                progresses[i] = progresses[i] + speeds[i]

        if progresses[0] >= 100:
            count = 0
            temp = []

            for i in progresses:
                if i >= 100:          
                    count += 1
                    temp.append(i)

            for i in temp:
                progresses.remove(i)
                        

            answer.append(count)

    return answer
