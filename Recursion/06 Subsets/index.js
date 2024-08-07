/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const getSubsets = (nums, curr, result, index) => {
  if (index === nums.length) {
    return result.push([...curr]);
  }

  curr.push(nums[index]);
  getSubsets(nums, curr, result, index + 1);
  curr.pop();
  getSubsets(nums, curr, result, index + 1);
};

var subsets = function (nums) {
  const result = [];
  getSubsets(nums, [], result, 0);
  return result;
};
