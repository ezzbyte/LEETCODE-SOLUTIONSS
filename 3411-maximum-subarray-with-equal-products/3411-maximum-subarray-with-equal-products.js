
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    let n = nums.length;
    let maxLen = 0;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    for (let i = 0; i < n; i++) {
        let product = 1n;
        let currentGcd = 0;
        let currentLcm = 1;

        for (let j = i; j < n; j++) {
            let num = nums[j];

            product *= BigInt(num);

            currentGcd = gcd(currentGcd, num);

            currentLcm =
                (currentLcm / gcd(currentLcm, num)) * num;

            if (
                product ===
                BigInt(currentGcd) * BigInt(currentLcm)
            ) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};
