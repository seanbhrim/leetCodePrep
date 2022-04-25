/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let longest = ''
  
  const expandMid = (left, right) => {
      while(left >= 0 && right < s.length){
          if(s[left] === s[right]){
              const localPalinDrome = s.slice(left, right + 1)
              if(localPalinDrome.length > longest.length){
                  longest = localPalinDrome
              }
              left--
              right++
          }else{
              left = -1    
          }
      }
      
      return longest
  }
  
  for(let i = 0; i < s.length; i++){
      expandMid(i,i)
      if(i < s.length - 1){
          expandMid(i,i+1)
      }
  }
  
  return longest
};
