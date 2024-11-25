import java.util.*;

class Node{
    int x, y;

    Node(int x, int y){
        this.x = x;
        this.y = y;
    }
}

class Solution {
    static int solution(int[][] maps){
        int[] dx = {-1, 0, 1, 0};
        int[] dy = {0, 1, 0, -1};

        boolean[][] visited = new boolean[maps.length][maps[0].length];

        Queue<Node> queue = new LinkedList<>();

        queue.offer(new Node(0,0));
        visited[0][0] = true;

        while (!queue.isEmpty()){
            Node tmp = queue.poll();

            for(int i = 0; i < 4; i++){
                int nx = tmp.x + dx[i];
                int ny = tmp.y + dy[i];

                if(nx >= 0 && nx < maps.length 
                        && ny >= 0 && ny < maps[0].length 
                        && !visited[nx][ny]
                        && maps[nx][ny] == 1
                ){
                    queue.add(new Node(nx, ny));
                    maps[nx][ny] = maps[tmp.x][tmp.y] + 1;
                    visited[nx][ny] = true;
                }
            }
        }

        if(maps[maps.length-1][maps[0].length-1] == 1){
            return -1;
        }

        return maps[(maps.length)-1][(maps[0].length)-1];
    }
}
