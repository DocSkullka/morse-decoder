const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let array = [];
    // Create array with elemets, which length === 10
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.substr(i, 10));
    }
    console.log("First array:" + array);
    //Delete zeros in left part of element 
    let withoutZeroArray = array.map((item) => {
        let i = 0;
        let count = 0;
        while (item[i] === "0") {
            count++;
            i++;
        }
        return item.slice(count);
    });
    console.log("without Zero Array:" + withoutZeroArray);
    // Transform element of array from binary form to morse code
    let morseArray = withoutZeroArray.map((item) => {

        let splitOneSymbolArray = [];
        splitOneSymbolArray = item.split('');
        console.log("split:" + splitOneSymbolArray);
        let splitTwoSymbolArray = [];
        for (i = 0; i < splitOneSymbolArray.length; i += 2) {
            splitTwoSymbolArray.push(splitOneSymbolArray[i] + splitOneSymbolArray[i + 1]);
        }
        console.log("splitTwoSymbolArray:" + splitTwoSymbolArray);
        let splitTwoSymbolArrayMorze = splitTwoSymbolArray.map((twoSymbols) => {
            if (twoSymbols !== "**") {
                let res = (twoSymbols === "11") ? "-" : ".";
                return res;
            } else { return " " };
        });
        return splitTwoSymbolArrayMorze.join('');
    });

    console.log("morseArray:" + morseArray);
    let str = "";
    for (let i = 0; i < morseArray.length; i++) {
        if (morseArray[i] === "     ") {
            str = str + " ";
        } else {
            str = str + MORSE_TABLE[morseArray[i]];
        }
    }
    return str;
}


module.exports = {
    decode
}