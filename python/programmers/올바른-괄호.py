def solution(s):
    answer = True
    stack = []
    count = 0
    
    for i in range(len(s)):
        if s[i] == '(':
            stack.append(s[i])
            count += 1 
        elif s[i] == ')':
            if len(stack) == 0:
                return False
            stack.pop()
            count -= 1

    if count != 0:
        answer = False

    return answer
