const MORSE_TABLE = {
    '*': ' ', //дбавил * со значением пробел. Иначе слова были слитно
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //колличество символов
    const countOfSymbols = expr.length / 10;
    // console.log('колличество символов = ', countOfSymbols);
    //массив будет состоять из строки чисел длинной 10 цифр
    const arrayOfDigits = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrayOfDigits.push(expr.slice(i, i+10))
    }
    // console.log('массив arrayOfDigits = ', arrayOfDigits);
    //здесь произойдет декодировка
    let decode = [];
    //создание пустых строк, равных колличеству символов
    for (let i = 0; i < countOfSymbols; i++) {
        decode[i] = '';
    }
    // console.log('массив decode = ', decode);
    for (let i = 0; i < countOfSymbols; i++) {
        for (let j = 0; j < 10; j += 2) {
            if (arrayOfDigits[i][j] === '*') {
                decode[i] = '*';
                break;
            }
            if (arrayOfDigits[i][j] === '1' && arrayOfDigits[i][j+1] === '0' ) {
                decode[i] += '.';
            }
            if (arrayOfDigits[i][j] === '1' && arrayOfDigits[i][j+1] === '1' ) {
                decode[i] += '-';
            }
        }
    }
    // console.log('преобразованные цифры в точки и тире: ', decode);
    //получение расшифрованного текста
    const arrayAfterDecode = decode.map(item => {
        return MORSE_TABLE[item]
    });
    // console.log('массив букв', arrayAfterDecode);
    const result = arrayAfterDecode.join('');
    // console.log('результат: ', result);
    return result;
}

module.exports = {
    decode
}