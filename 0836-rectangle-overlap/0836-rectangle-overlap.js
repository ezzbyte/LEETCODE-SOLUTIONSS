/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let left = Math.max(rec1[0], rec2[0]);
    let right = Math.min(rec1[2],rec2[2]);

    let bottom = Math.max(rec1[1],rec2[1]);
    let top = Math.min(rec1[3],rec2[3]);

    if(left < right && bottom < top){
        return true;
    }else{
        return false;
    }
};