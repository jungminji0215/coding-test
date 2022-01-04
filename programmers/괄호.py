# 프로그래머스 스쿨

def solution(s):
    stack = []

    dic = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for i in s:
        if i == "(" or i == "{" or i == "[":
            stack.append(i)

        elif i == ")" or i == "}" or i == "]":
            if stack:
                check = stack.pop()
                if dic[i] != check:
                    return False
            else:
                return False

    return True
