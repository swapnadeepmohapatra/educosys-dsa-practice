/**
 * @param {number[]} nums
 * @return {number}
 */

const getMaxAmount = (nums, index) => {
  if (index < 0) {
    return 0;
  }

  return Math.max(
    nums[index] + getMaxAmount(nums, index - 2),
    getMaxAmount(nums, index - 1)
  );
};

var rob = function (nums) {
  return Math.max(
    getMaxAmount(nums, nums.length - 1),
    getMaxAmount(nums, nums.length - 2)
  );
};
