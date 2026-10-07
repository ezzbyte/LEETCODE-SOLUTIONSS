/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {

    function isValid(str) {
        let balance = 0;

        for (let char of str) {

            if (char === "(") {
                balance++;
            }
            else if (char === ")") {
                balance--;

                if (balance < 0) {
                    return false;
                }
            }
        }

        return balance === 0;
    }

    let current = new Set([s]);

    while (true) {

        let answer = [];

        // Check current level
        for (let str of current) {
            if (isValid(str)) {
                answer.push(str);
            }
        }

        // If we found valid strings,
        // this is the minimum removal level
        if (answer.length > 0) {
            return answer;
        }

        // Generate next level
        let next = new Set();

        for (let str of current) {

            for (let i = 0; i < str.length; i++) {

                // Only remove parentheses
                if (str[i] !== "(" && str[i] !== ")") {
                    continue;
                }

                let newString =
                    str.slice(0, i) + str.slice(i + 1);

                next.add(newString);
            }
        }

        current = next;
    }
};