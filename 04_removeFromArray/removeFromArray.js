const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args[0];
    const elements = args.slice(1);
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (elements[i] === arr[j]) {
                arr.splice(arr.indexOf(elements[i]), 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
