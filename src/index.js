module.exports = function check(str, bracketsConfig) {
    let arr;
    let res = false;
    for (let bracketsPair of bracketsConfig) {
        arr = str.split(bracketsPair[0] + bracketsPair[1]);
        str = arr.join("");
    }
    for (let bracketsPair of bracketsConfig) {
        if (str.includes(bracketsPair[0] + bracketsPair[1])) {
            res = check(str, bracketsConfig);
        }
    }
    if (res === true) {
        return true;
    }
    return str.length > 0 ? false : true;
};
