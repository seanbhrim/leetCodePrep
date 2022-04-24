/**
 * Given sorted numbers, return index of target. If not present, return -1.
 * | 1 <= nums.length <= 10^4
 * | -10^4 < nums[i], target < 10^4
 * | All numbers are unique
 * | Sorted ascendingly
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  const binarySearch = (leftIndex, rightIndex) => {
    if (leftIndex === rightIndex){
      return nums[leftIndex] === target ? leftIndex : -1
    }
      
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex)/2)        
    
    if (nums[midIndex] < target){
      return binarySearch(midIndex + 1, rightIndex)

    } else {
      return binarySearch(leftIndex, midIndex)
      
    }
  }
  
  const targetIndex = binarySearch(0, nums.length)
  
  return targetIndex  
  
};
