module.exports = function reverse(n) {
    let newString = "";
    n = n.toString();
    for (let i = n.length - 1; i >= 0; i--) {
        newString += n[i];
    }
    return +newString;
};
