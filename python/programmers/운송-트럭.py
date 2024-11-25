# 오답
# 운송 트럭
def solution(max_weight, specs, names):
    specs_dict = {}
    stack = []
    truck_count = 0

    # 해당 상품의 가격을 쉽게 찾기 위해 딕셔너리로 만듦
    for i in range(len(specs)):
        specs_dict[specs[i][0]] = specs[i][1]


    for i in range(len(names)):
        weight = int(specs_dict[names[i]])
        weight_sum = 0

        if weight <= max_weight:

            if not stack: # 스택이 비어있으면
                stack.append(weight)
            else:
                weight_sum = stack[-1] + weight

                if weight_sum >= max_weight:
                    stack.pop()
                    stack.append(weight)
                    truck_count += 1
                else:
                    stack.pop()
                    stack.append(weight_sum)
        else:
            continue

    if not stack:
        return truck_count
    else:
        return truck_count + 1
