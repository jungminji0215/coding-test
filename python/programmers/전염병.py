# 프로그래머스 스쿨 문제 - 테스트는 안 해봄...
import sys
input = sys.stdin.readline
from collections import deque



def solution(m, n, infests, vaccinateds):
    visited = [[0 for _ in range(n)] for _ in range(m)]

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    day = 0
    q = deque()

    for i in infests:
        visited[i[0]-1][i[1]-1] = 1

    # 백신 맞는 사람 체크
    for i in vaccinateds:
        visited[i[0]-1][i[1]-1] = "v"
    
    '''
    [
        [0, 'v', 0, 1], 
        [0,  1,  0, 0]
    ]
    '''

    for i in range(m):
        for j in range(n):
            if visited[i][j] == 1:
                q.append([i,j])
    
    
    while q:
        x, y = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < m and 0 <= ny < n:
                if visited[nx][ny] == 0:
                    visited[nx][ny] = visited[x][y] + 1
                    q.append([nx,ny])

    for i in range(m):
        for j in range(n):
            if visited[i][j] != "v" and day < visited[i][j]:
                day = visited[i][j]

    return day - 1



# m = 2
# n = 4
# infests = [[1,4],[2,2]]
# vaccinateds = [[1,2]]

# print(solution(m, n, infests, vaccinateds))
