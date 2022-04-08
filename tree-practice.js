const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if(!rootNode.left) return rootNode.val;
  return findMinBST(rootNode.left);
}

function findMaxBST (rootNode) {
  if(!rootNode.right) return rootNode.val;
  return findMaxBST(rootNode.right);
}

function findMinBT (rootNode, minVal = rootNode.val) {
  if(!rootNode) return minVal;

  if(rootNode.val < minVal){
    minVal = rootNode.val;
  }

  minVal = findMinBT(rootNode.left, minVal);
  minVal = findMinBT(rootNode.right, minVal);

  return minVal;
}

function findMaxBT (rootNode, maxVal = rootNode.val) {
  if(!rootNode) return maxVal;

  if(rootNode.val > maxVal){
    maxVal = rootNode.val;
  }

  maxVal = findMaxBT(rootNode.left, maxVal);
  maxVal = findMaxBT(rootNode.right, maxVal);

  return maxVal;
}

function getHeight (rootNode) {
  if(!rootNode) return -1

  let leftDepth = getHeight(rootNode.left);
  let rightDepth = getHeight(rootNode.right);

  if(leftDepth > rightDepth){
    return (leftDepth + 1)
  }
  else
  {
    return (rightDepth + 1)
  }
}

function countNodes (rootNode) {
  if(!rootNode) return 0;

  let leftCount = countNodes(rootNode.left);
  let rightCount = countNodes(rootNode.right);

  return rightCount + leftCount + 1;
}

function balancedTree (rootNode) {
  // if(!rootNode) return -1

  let leftDepth = getHeight(rootNode.left);
  let rightDepth = getHeight(rootNode.right);

  if(Math.abs(leftDepth - rightDepth) <= 1){
    return true;
  }
  else
  {
    return false;
  }
}

function getParentNode (rootNode, target, prevNode = null, targetNode = []) {
  //if node.val equal to target return null
  //if node.left or node.right value is equal to the target return current node.
  //if node is null return;

  //recurse left
  //recurse right

  //return undefined
  if(!rootNode) return;
  if((rootNode.val === target) && (prevNode === null)) return null;
  if(rootNode.val === target) {
    //console.log('targetFound!', prevNode.val);
    targetNode.push(prevNode);
    return targetNode;
  }
  prevNode = rootNode;
  getParentNode(rootNode.left, target, prevNode, targetNode);
  getParentNode(rootNode.right, target, prevNode, targetNode);

  //console.log(targetNode);
  return targetNode[0];

}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
