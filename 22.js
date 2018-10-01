// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 树的广度遍历，利用队列来实现

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function printFromToptoBottom(root) {
    if(!root) {
        return;
    }

    let queue = [root];
    let result = [];

    while(queue.length > 0) {
        let node = queue.shift();
        result.push(node.val);

        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return result;
}