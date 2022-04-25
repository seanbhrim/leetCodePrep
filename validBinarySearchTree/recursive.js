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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  const LIMIT_VALUE = Math.pow(2, 31)
  const UPPER_LIMIT = LIMIT_VALUE + 1
  const LOWER_LIMIT = -LIMIT_VALUE - 1
  
  const leftValid = isValidSubtree(root.left, LOWER_LIMIT, root.val)
  const rightValid = isValidSubtree(root.right, root.val, UPPER_LIMIT)
  
  return leftValid && rightValid
};


const isValidSubtree = (current, lower, upper) => {    
  if(current === null){
      return true
  }
  
  if(current.val <= lower || current.val >= upper){
      return false
  }
  
  const leftValid = isValidSubtree(current.left, lower, current.val)
  const rightValid = isValidSubtree(current.right, current.val, upper)
  
  return leftValid && rightValid
}
