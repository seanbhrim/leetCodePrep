/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const typeMap = {'(': 1, '{': 1, '[': 1}
  const pairMap = {')': '(', '}': '{', ']': '['}
  const stack = []
  
  for(let i = 0; i < s.length; i++){   
      if(typeMap[s[i]] === 1){
          stack.push(s[i])
      }else{
          if(stack[stack.length - 1] === pairMap[s[i]]){
              stack.pop()
          } else {
              return false
          }
      }
  }
  
  return stack.length === 0
  
};
