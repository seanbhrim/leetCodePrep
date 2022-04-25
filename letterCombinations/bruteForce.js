/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const baseDict = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
  }
  
  let collection = []
  
  const updateCollection = (letters) => {
      let n = collection.length
      
      if(n === 0){
          collection = [...letters]
          return
      }
      
      for(let i = 0; i < n; i++){
          letters.forEach(letter => {
              collection.push(collection[0] + letter)
          })
          collection.shift()
      }
  }
  
  for(let i = 0; i < digits.length; i++){
      const letters = baseDict[digits[i]]
      updateCollection(letters)
  }
  
  return collection
};
