/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonth = [
        31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    function getDay(date) {
        let [month, day] = date.split("-").map(Number);

        let total = day;

        for (let i = 0; i < month - 1; i++) {
            total += daysInMonth[i];
        }

        return total;
    }

    let aliceStart = getDay(arriveAlice);
    let aliceEnd = getDay(leaveAlice);

    let bobStart = getDay(arriveBob);
    let bobEnd = getDay(leaveBob);

    let start = Math.max(aliceStart, bobStart);
    let end = Math.min(aliceEnd, bobEnd);

    return Math.max(0, end - start + 1);
};
