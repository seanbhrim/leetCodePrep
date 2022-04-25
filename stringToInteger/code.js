/**
 * @param {string} s
 * @return {number}
 */

// Check for negative
// Pull out number

// Look for first non-zero number, stop at last int


var myAtoi = function(s) {
  let i = 0
  let signFactor = 1
  let num = 0
  
  const MIN_RESULT = -Math.pow(2, 31)
  const MAX_RESULT = -MIN_RESULT - 1
  
  // Ignore whitespaces
  while(s[i] === ' '){
      i++
  }
  
  // Get sign
  if(/[+-]/.test(s[i])){
      signFactor = s[i] === '-' ? -1 : 1
      i++
  }
  
  // Extract number
  while(/[0-9]/.test(s[i])){
      num = (num * 10) + parseInt(s[i])
      
      if(signFactor === 1 && num > MAX_RESULT) return MAX_RESULT
      if(signFactor === -1 && -num < MIN_RESULT) return MIN_RESULT
      
      i++
  }
  
  return num * signFactor
};
