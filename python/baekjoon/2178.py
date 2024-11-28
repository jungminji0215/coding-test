from collections import deque

def bfs():
    while q:
        n, m = q.popleft()

        for i in range(4):
            nn = n + dn[i]
            mm = m + dm[i]

            if 0 <= nn < N and 0 <= mm < M:
                if maze[nn][mm] == 1:
                    q.append([nn,mm])
                    maze[nn][mm] = maze[n][m] + 1

    return maze[N-1][M-1]

N, M = map(int, input().split())
maze = [list(map(int, input())) for _ in range(N)]

dn = [-1, 1, 0, 0]
dm = [0, 0, -1, 1]

q = deque()

# 시작이 처음부터니까
## 처음 위치를 q에 넣어주고 시작
q.append([0,0])

print(bfs())
