import sys
from collections import deque


# 명령의 수 입력
N = int(sys.stdin.readline())
queue = deque()

# 명령 수 만큼 반복
for i in range(N):
    a = sys.stdin.readline().split()
    
    if a[0] == "push":
        queue.append(a[1])
    elif a[0] == "pop":
        if len(queue) == 0:
            print("-1")
        else:
            print(queue[0])
            queue.popleft()
    elif a[0] == "size":
        print(len(queue))
    elif a[0] == "empty":
        if len(queue) == 0:
            print(1)
        else:
            print(0)
    elif a[0] == "front":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[0])
    elif a[0] == "back":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[-1]) 
