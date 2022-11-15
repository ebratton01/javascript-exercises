const reverseString = function(word) {
    let reverse = '';
    for (let i = 1; i < word.length + 1; ++i) {
        reverse += word[word.length - i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
