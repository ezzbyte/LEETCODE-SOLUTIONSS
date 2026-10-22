/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let rev = s.split(/\s+/).reverse().join(" ");
    return rev.trim();
};