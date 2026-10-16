/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let max = height[i];
        let another = height[j];

        let width = j - i;
        let num = Math.min(max, another);
        let area = num * width;

        result = Math.max(result, area);

        if (max < another) {
            i++;
        } else {
            j--;
        }
    }

    return result;
};