/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if(head === null){
      return false
  }
  
  const visited = []
  let current = head
  
  while(current){
      if(visited.includes(current)){
          return true
      }
      visited.push(current)
      current = current.next
  }
  
  return false
  
};
