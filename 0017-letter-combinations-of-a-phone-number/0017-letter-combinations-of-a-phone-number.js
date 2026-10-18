/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let result = [];
    let current = "";
    let phone = {
          "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    function back(index){
        if(index === digits.length){
            result.push(current);
            return;
        }

        let letters = phone[digits[index]];
        for(let i = 0;i < letters.length;i++){
            let letter = letters[i];

            current += letter;
            back(index + 1);
            current = current.slice(0,-1)
        }
    }

    back(0);
    return result;
};