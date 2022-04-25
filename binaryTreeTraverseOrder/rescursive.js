/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const result = []
  
  const addInOrder = (current) => {
      if(current !== null){
          addInOrder(current.left)
          result.push(current.val)
          addInOrder(current.right)
      }
  }
  
  addInOrder(root)
  
  return result
};
