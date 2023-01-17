class Node{
    int data; // 트리의 데이터 저장하는 변수
    Node lt, rt; // 인스턴스 변수/ 노드의 주소값 저장

    public Node(int val){
        data = val;
        lt=rt=null;
    }
}

public class Main {
    Node root;

    public void DFS(Node root){
        if(root == null){
            return;
        }else {
            System.out.println(root.data + " "); // 전위 순회
            DFS(root.lt);
            System.out.println(root.data + " "); // 중위 순회
            DFS(root.rt);
            System.out.println(root.data + " "); // 후위 순회

        }
    }

    public static void main(String[] args) {
        Main tree = new Main();

        tree.root = new Node(1); // 100번지가 할당되었다고 가정

        tree.root.lt = new Node(2);
        tree.root.rt = new Node(3);

        tree.root.lt.lt = new Node(4);
        tree.root.lt.rt = new Node(5);

        tree.root.rt.lt = new Node(6);
        tree.root.lt.rt = new Node(7);

        tree.DFS(tree.root);
    }
}
