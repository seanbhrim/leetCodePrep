/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseWords = function(s) {
    
  const reverse = (left, right) => {
      while(left < right){
          const temp = s[left]
          s[left] = s[right]
          s[right] = temp
          
          left++
          right--
      }
  }
  
  // Reverse whole str
  reverse(0, s.length - 1)
  
  // Reverse each word
  let start = 0, end = 0;
  let n = s.length
  
  while(start < n){
      while(end !== n - 1 && s[end + 1] !== ' '){
          end++
      }
      
      reverse(start, end)
      
      end += 2
      start = end   
  }
};
