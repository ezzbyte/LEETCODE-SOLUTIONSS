/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
      let map = new Map();

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    let minSum = Infinity;
    let answer = [];

    for (let j = 0; j < list2.length; j++) {

        if (map.has(list2[j])) {

            let sum = map.get(list2[j]) + j;

            if (sum < minSum) {
                minSum = sum;
                answer = [list2[j]];
            } 
            else if (sum === minSum) {
                answer.push(list2[j]);
            }
        }
    }

    return answer;
};