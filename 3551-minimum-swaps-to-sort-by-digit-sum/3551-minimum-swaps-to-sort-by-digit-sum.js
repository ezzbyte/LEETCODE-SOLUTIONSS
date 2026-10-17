/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    function digitSum(num) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    let sorted = [...nums].sort((a, b) => {
        let diff = digitSum(a) - digitSum(b);
        return diff !== 0 ? diff : a - b;
    });

    let targetIndex = new Map();

    for (let i = 0; i < sorted.length; i++) {
        targetIndex.set(sorted[i], i);
    }

    let visited = new Array(nums.length).fill(false);
    let swaps = 0;

    for (let i = 0; i < nums.length; i++) {
        if (visited[i] || targetIndex.get(nums[i]) === i) {
            continue;
        }

        let cycleLength = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = targetIndex.get(nums[j]);
            cycleLength++;
        }

        swaps += cycleLength - 1;
    }

    return swaps;
};