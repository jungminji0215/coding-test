class Node{
    int data;
    Node left;
    Node right;

    public Node(int date){
        this.data = date;
        this.left = null;
        this.right = null;
    }
}

public class Main{
    public static Node dfs(Node root, Node p, Node q){
        if(root == null){
            return null;
        }

        Node left = dfs(root.left, p, q);
        Node right = dfs(root.right, p, q);

        if(root == p || root == q){
            return root;
        } else if (left == null && right != null) {
            return right;
        } else if (left != null && right == null) {
            return left;
        } else if (left != null && right != null) {
            return root;
        }
        return null;
    }

    public static void main(String[] args) {
        Node root = new Node(3);
        root.left = new Node(5);
        root.right = new Node(1);
        root.left.left = new Node(6);
        root.left.right = new Node(2);
        root.right.left = new Node(0);
        root.right.right = new Node(8);
        root.left.right.left = new Node(7);
        root.left.right.right = new Node(4);


        System.out.println(dfs(root, root.left.left, root.right).data);
    }
}
