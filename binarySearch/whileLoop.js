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
  let left = 0
  let right = nums.length
  
  while(left !== right){
      const mid = left + Math.floor((right - left)/2)
      
      if (nums[mid] < target) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  
  return nums[left] === target ? left : -1
  
};
