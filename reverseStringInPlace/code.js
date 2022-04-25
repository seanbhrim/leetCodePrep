/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  const sLength = s.length
  
  for(let i = 0; i < sLength; i++){
      s.splice(i, 0, s.pop())
  }
};
