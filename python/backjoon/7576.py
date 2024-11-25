import sys
from collections import deque
input = sys.stdin.readline 

def bfs():
    while q:
        n, m = q.popleft()

        for i in range(4):
            nn = n + dn[i]
            mm = m + dm[i]

            if 0 <= nn < N and 0 <= mm < M:
                if box[nn][mm] == 0:
                    box[nn][mm] = box[n][m] + 1
                    q.append([nn, mm])

    day = 0

    for i in range(N):
        for j in range(M):
            # 안 익은 거 만나면 바로 -1 리턴
            if box[i][j] == 0:
                return -1
            else:
                if box[i][j] > day:
                    day = box[i][j]

    return day - 1

M, N = map(int, input().split())

box = [list(map(int, input().split())) for _ in range(N)]

q = deque()

dm = [0, 0, -1, 1]
dn = [-1, 1, 0, 0]


# 익은거 다 넣어서
# 한 번에 같이 시작해야하니까 
# 1인거 다 넣어준다.
for i in range(N):
    for j in range(M):
        if box[i][j] == 1:
            q.append([i,j])

# 다 넣어주고 bfs 돌려준다
print(bfs())
