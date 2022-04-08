// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
    }
  
    insert(val, currentNode = this.root) {
      // Your code here
      if (currentNode === null) {
        this.root = new TreeNode(val)
        return
      }
  
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val)
          return
        }
        this.insert(val, currentNode.left)
      }
  
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val)
          return
        }
        this.insert(val, currentNode.right)
      }
    }
  
    search(val) {
      // Your code here
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.val > val) {
          currentNode = currentNode.left
        }
        else if (currentNode.val < val) {
          currentNode = currentNode.right
        }
        else {
          return true;
        }
      }
      return false
    }
  
  
    preOrderTraversal(currentNode = this.root) {
  
      if (!currentNode) return;
  
      console.log(currentNode.val);
  
      this.preOrderTraversal(currentNode.left);
  
      this.preOrderTraversal(currentNode.right);
    }
  
    inOrderTraversal(currentNode = this.root) {
  
      if (!currentNode) return;
  
      this.inOrderTraversal(currentNode.left);
  
      console.log(currentNode.val);
  
      this.inOrderTraversal(currentNode.right);
    }
  
    postOrderTraversal(currentNode = this.root) {
  
      if (!currentNode) return;
  
      this.postOrderTraversal(currentNode.left);
  
      this.postOrderTraversal(currentNode.right);
  
      console.log(currentNode.val);
    }
  
    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      //  initialize a queue with the root node
      let q = [this.root];
  
      //  while the queue is not empty
      while (q.length > 0) {
        //  print and remove first node in queue
        let node = q.shift();
        console.log(node.val);
        //  if the node has a left node
        //  push the left node on the back of the queue
        if (node.left) q.push(node.left);
        //  if the node has a right node
        //  push the right node on the back of the queue
        if (node.right) q.push(node.right);
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      //  initialize a stack with the root node
      let stack = [this.root];
  
      //  while the stack is not empty
      while (stack.length > 0) {
        //  print and remove first node in stack
        let node = stack.pop();
        console.log(node.val);
        // if the node has a left node
        // push the left node on the back of the stack
        if (node.left) stack.push(node.left);
        // if the node has a right node
        // push the right node on the back of the stack
        if (node.right) stack.push(node.right);
      }
    }
  }
  
  module.exports = { BinarySearchTree, TreeNode };