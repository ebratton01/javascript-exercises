const palindromes = function (str) {
    str = str.replace(/[^\w\']|_/g, "");
    str = str.toLowerCase();
    let j = str.length-1;
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length/2; i++) {
            if (str[i] != str[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (i == j) {
                break;
            }
            if (str[i] != str[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
