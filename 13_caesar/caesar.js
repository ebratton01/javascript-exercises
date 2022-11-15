const caesar = function(str, num) {
    let cipher = '';
    charCodeA = 'A'.charCodeAt(0);
    charCodeZ = 'Z'.charCodeAt(0);
    charCodea = 'a'.charCodeAt(0);
    charCodez = 'z'.charCodeAt(0);
    letterRange = charCodeZ - charCodeA + 1;
    shiftNum = 0;
    overFlow = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= charCodea && str.charCodeAt(i) <= charCodez) {
            shiftNum = num + str.charCodeAt(i);
            if (shiftNum > charCodez) {
                overFlow = shiftNum - charCodez;
                if (overFlow > letterRange) {
                    overFlow = overFlow % letterRange
                }
                shiftNum = charCodea + overFlow - 1;
            }
            if (shiftNum < charCodea) {
                overFlow = charCodea - shiftNum;
                if (overFlow < -letterRange) {
                    overFlow = overFlow % letterRange
                }
                shiftNum = charCodez - overFlow + 1;
            }
            cipher += String.fromCharCode(shiftNum);
        }
        else if (str.charCodeAt(i) >= charCodeA && str.charCodeAt(i) <= charCodeZ) {
            shiftNum = num + str.charCodeAt(i);
            if (shiftNum > charCodeZ) {
                overFlow = shiftNum - charCodeZ;
                if (overFlow > letterRange) {
                    overFlow = overFlow % letterRange
                }
                shiftNum = charCodeA + overFlow - 1;
            }
            if (shiftNum < charCodeA) {
                overFlow = charCodeA - shiftNum;
                if (overFlow < -letterRange) {
                    overFlow = overFlow % letterRange
                }
                shiftNum = charCodeZ - overFlow + 1;
            }
            cipher += String.fromCharCode(shiftNum);
        }
        else {
            cipher += str[i];
        }
    }
    return cipher;
};

// Do not edit below this line
module.exports = caesar;
