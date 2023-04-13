function findOdd(A) {
    var res = [];
    var unique = Array.from(new Set(A));
    var _loop_1 = function (u) {
        res.push(A.filter(function (num) { return num === unique[u]; }));
    };
    for (var u = 0; u < unique.length; u++) {
        _loop_1(u);
    }
    return res.filter(function (arr) { return arr.length % 2 !== 0; })[0][0];
}
console.log(findOdd([7, 1, 1, 3]));
