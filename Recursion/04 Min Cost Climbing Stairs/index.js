/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  return Math.min(
    getMinCost(cost.length - 1, cost),
    getMinCost(cost.length - 2, cost)
  );
};

const getMinCost = (index, costs) => {
  if (index <= 1) {
    return costs[index];
  }

  return (
    (index == costs.length ? 0 : costs[index]) +
    Math.min(getMinCost(index - 1, costs), getMinCost(index - 2, costs))
  );
};
