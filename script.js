let brailleDots = [0, 0, 0, 0, 0, 0];

function toggleDot(dotIndex) {
    brailleDots[dotIndex - 1] = brailleDots[dotIndex - 1] ? 0 : 1;
    updateDotStyles();
}

function updateDotStyles() {
    for (let i = 0; i < brailleDots.length; i++) {
        const dot = document.getElementById(`dot-${i + 1}`);
        dot.style.backgroundColor = brailleDots[i] ? '#ff69b4' : '#ccc';
    }
}

function convertToText() {
    const brailleMap_en = {
        '100000': 'a(1)', '110000': 'b(2)', '100100': 'c(3)', '100110': 'd(4)',
        '100010': 'e(5)', '110100': 'f(6)', '110110': 'g(7)', '110010': 'h(8)',
        '010100': 'i(9)', '010110': 'j(0)', '101000': 'k', '111000': 'l',
        '101100': 'm', '101110': 'n', '101010': 'o', '111100': 'p',
        '111110': 'q', '111010': 'r', '011100': 's', '011110': 't',
        '101001': 'u', '111001': 'v', '010111': 'w', '101101': 'x',
        '101111': 'y', '101011': 'z', '001111': '(Number)', '000101': '(Decimal)', '010011': '.', '010000': ',', '011010': '!', '011001': '?', '011000': ';', '010010': ':', '001001': '-', '001000': '\'', '001011': '\"'
        , '011001': '\"', '001100': '/', '000100': '(Accend)', '000011': '(Letter)', '000001': '(Capital)', '000101': '(emph.)', '001001': '(Stop)', '111101': 'and', '111111': 'for', '111011': 'of', '011101': 'the', '011111': 'with', '100001': 'ch', '110001': 'gh', '100101': 'sh', '100111': 'th', '100011': 'wh', '110101': 'ed', '110111': 'er', '110011': 'ou', '010101': 'ow', '010001': 'en', '001010': 'in', '001100': 'st', '001110': 'ar', '000000': ' '
    };

    const brailleString_en = brailleDots.join('');
    const textOutput_en = document.getElementById('text-output-en');

    if (brailleMap_en[brailleString_en]) {
        textOutput_en.textContent += brailleMap_en[brailleString_en];
    } else {
        textOutput_en.textContent += '[Invalid]';
    }

    //Chinese
    const brailleMap_cn = {
        '110000': 'b', '111100': 'p', '101100': 'm', '110100': 'f',
        '100110': 'd', '011110': 't', '101110': 'n', '111000': 'l',
        '110110': '(g/j)', '101000': '(k/q)', '110010': '(h/x)', '001100': 'zh(i)',
        '111110': 'ch(i)', '100011': 'sh(i)', '010110': 'r(i)', '101011': 'z(i)',
        '100100': 'c(i)', '011100': 's(i)', '100000': '[第一声]', '010000': '[第二声]',
        '001000': '[第三声]', '011000': '[第四声]', '111010': 'er', '001010': 'a',
        '010001': '(e/o)', '010101': 'ai', '011101': 'ei', '011010': 'ao',
        '111011': 'ou', '111001': 'an', '001011': 'en', '011001': 'ang',
        '001111': 'eng', '010100': 'i(yi)', '110101': 'ia(ya)', '100010': 'ie(ye)', '001110': 'iao(yao)', '110011': 'iu(you)', '100101': 'ian(yan)', '110001': 'in(yin)', '101101': 'iang(yang)', '100001': 'ing(ying)', '101001': 'u(wu)', '111111': 'ua(wa)', '101010': 'uo(wo)', '101111': 'uai(wai)', '010111': 'ui(wei)', '110111': 'uan(wan)', '010010': 'un(wen)', '011011': 'uang(wang)', '010011': 'ong(weng)', '001101': 'v(yu)', '011111': 've(yue)', '111101': 'van(yuan)', '000111': 'vn(yun)', '100111': 'iong(yong)', '000000': ' '
    };

    const brailleString_cn = brailleDots.join('');
    const textOutput_cn = document.getElementById('text-output-cn');

    if (brailleMap_cn[brailleString_cn]) {
        textOutput_cn.textContent += brailleMap_cn[brailleString_cn];
    } else {
        textOutput_cn.textContent += '[Invalid]';
    }

    //braille
    const brailleMap_br = {
        '000000': '⠀', '100000': '⠁', '010000': '⠂', '110000': '⠃', '001000': '⠄', '101000': '⠅', '011000': '⠆', '111000': '⠇',
        '000100': '⠈', '100100': '⠉', '010100': '⠊', '110100': '⠋', '001100': '⠌', '101100': '⠍', '011100': '⠎', '111100': '⠏',
        '000010': '⠐', '100010': '⠑', '010010': '⠒', '110010': '⠓', '001010': '⠔', '101010': '⠕', '011010': '⠖', '111010': '⠗',
        '000110': '⠘', '100110': '⠙', '010110': '⠚', '110110': '⠛', '001110': '⠜', '101110': '⠝', '011110': '⠞', '111110': '⠟',
        '000001': '⠠', '100001': '⠡', '010001': '⠢', '110001': '⠣', '001001': '⠤', '101001': '⠥', '011001': '⠦', '111001': '⠧',
        '000101': '⠨', '100101': '⠩', '010101': '⠪', '110101': '⠫', '001101': '⠬', '101101': '⠭', '011101': '⠮', '111101': '⠯',
        '000011': '⠰', '100011': '⠱', '010011': '⠲', '110011': '⠳', '001011': '⠴', '101011': '⠵', '011011': '⠶', '111011': '⠷',
        '000111': '⠸', '100111': '⠹', '010111': '⠺', '110111': '⠻', '001111': '⠼', '101111': '⠽', '011111': '⠾', '111111': '⠿'
    };

    const brailleString_br = brailleDots.join('');
    const textOutput_br = document.getElementById('text-output-br');

    if (brailleMap_br[brailleString_br]) {
        textOutput_br.textContent += brailleMap_br[brailleString_br];
    } else {
        textOutput_br.textContent += '[Invalid]';
    }


    //clear dots
    brailleDots = [0, 0, 0, 0, 0, 0];
    updateDotStyles();
}

function convertToBraille() {
    const inputText = document.getElementById('input-text').value;
    const brailleOutput = document.getElementById('braille-output');
    const brailleMap = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓',
        'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏',
        'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
        'y': '⠽', 'z': '⠵', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑',
        '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊', '0': '⠚', ' ': '⠀',
        '!': '⠮', '\"': '⠐⠂', '#': '⠼⠲', '%': '⠐⠶', '&': '⠐⠦', '\'': '⠄'
        , '(': '⠐⠣', ')': '⠐⠜', '*': '⠐⠔', '+': '⠼⠖', ',': '⠂', '-': '⠤', '.': '⠲',
        '/': '⠦', ':': '⠒', ';': '⠆', '<': '⠰', '=': '⠤', '>': '⠆', '?': '⠢',
        '@': '⠜', '[': '⠪', '\\': '⠳', ']': '⠻', '^': '⠘⠂', '_': '⠤⠂',
        '`': '⠐⠦', '{': '⠪', '|': '⠳', '}': '⠻', '~': '⠰'

    };
    let brailleText = '';
    let isNumber = false;

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i].toLowerCase();
        if (char >= '0' && char <= '9') {
            if (!isNumber) {
                brailleText += '⠼' + brailleMap[char];
                isNumber = true;
            } else {
                brailleText += brailleMap[char];
            }
        } else {
            isNumber = false;
            brailleText += brailleMap[char] + '';
        }
        brailleText += '';

    }

    brailleOutput.textContent = brailleText.trim();
}
function clearAll() {
    document.getElementById('text-output-en').textContent = '';
    document.getElementById('text-output-cn').textContent = '';
    document.getElementById('text-output-br').textContent = '';
    // Reset the Braille dots
    brailleDots = [0, 0, 0, 0, 0, 0];
    updateDotStyles();
}
function space() {
    document.getElementById('text-output-en').textContent += ' ';
    document.getElementById('text-output-cn').textContent += ' ';

}

function clearText() {
    document.getElementById('input-text').value = '';
    document.getElementById('braille-output').textContent = '';
}

