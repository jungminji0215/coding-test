# 2018 카카오 기출
def solution(dartResult):
    score_list = [0] * 3
    list_index = 0
    dartResult = dartResult.replace("10", "A")

    for i in range(len(dartResult)):

        if str.isdigit(dartResult[i]) or dartResult[i] == "A":
            # 점수가 10인 경우
            if dartResult[i] == "A":
                score = 10
            else:
                score = int(dartResult[i])
        else:
            # 1배
            if dartResult[i] == "S":
                score_list[list_index] = score
                list_index += 1

            # 2배
            elif dartResult[i] == "D":
                score_list[list_index] = (score * score)
                list_index += 1

            # 3배
            elif dartResult[i] == "T":
                score_list[list_index] = (score * score * score)
                list_index += 1

            # 첫 번째 점수의 *는 첫 번째만 두배
            #나머지는 앞과현재 두배
            elif dartResult[i] == "*": 
                if i == 2:
                    score_list[0] = (score_list[0] * 2)
                else:
                    score_list[list_index - 2] = (score_list[list_index - 2] * 2)
                    score_list[list_index - 1] = (score_list[list_index - 1] * 2)

            # 점수 - 로 변경
            elif dartResult[i] == "#":
                score_list[list_index - 1] = (score_list[list_index - 1] * (-1))

    return sum(score_list)
