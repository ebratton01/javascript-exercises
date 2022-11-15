const repeatString = function(word, num) {
        let words = '';
        if (num < 0) {
            return 'ERROR'
        }
        for (let i = 0; i < num; i++) {
            words += word;
        }
        return words;
};

// Do not edit below this line
module.exports = repeatString;
