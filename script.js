{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let brailleDots = [0, 0, 0, 0, 0, 0];\
\
function toggleDot(dotIndex) \{\
    brailleDots[dotIndex - 1] = brailleDots[dotIndex - 1] ? 0 : 1;\
    updateDotStyles();\
\}\
\
function updateDotStyles() \{\
    for (let i = 0; i < brailleDots.length; i++) \{\
        const dot = document.getElementById(`dot-$\{i + 1\}`);\
        dot.style.backgroundColor = brailleDots[i] ? '#ff69b4' : '#ccc';\
    \}\
\}\
\
function convertToText() \{\
    const brailleMap_en = \{\
         '100000': 'a(1)', '110000': 'b(2)', '100100': 'c(3)', '100110': 'd(4)',\
        '100010': 'e(5)', '110100': 'f(6)', '110110': 'g(7)', '110010': 'h(8)',\
        '010100': 'i(9)', '010110': 'j(0)', '101000': 'k', '111000': 'l',\
        '101100': 'm', '101110': 'n', '101010': 'o', '111100': 'p',\
        '111110': 'q', '111010': 'r', '011100': 's', '011110': 't',\
        '101001': 'u', '111001': 'v', '010111': 'w', '101101': 'x',\
        '101111': 'y', '101011': 'z', '001111': '(Number)', '000101': '(Decimal)', '010011': '.', '010000': ',', '011010': '!', '011001': '?', '011000':';', '010010':':', '001001':'-','001000':'\\'','001011':'\\"'\
      ,'011001':'\\"','001100':'/','000100':'(Accend)','000011':'(Letter)','000001':'(Capital)','000101':'(emph.)','001001':'(Stop)','010000':'(non-Latin)','111101':'and','111111':'for','111011':'of', '011101':'the','011111':'with','100001':'ch','110001':'gh','100101':'sh','100111':'th','100011':'wh','110101':'ed','110111':'er','110011':'ou','010101':'ow','010001':'en','001010':'in','001100':'st','001110':'ar'\
\};\
\
    const brailleString_en = brailleDots.join('');\
    const textOutput_en = document.getElementById('text-output-en');\
\
    if (brailleMap_en[brailleString_en]) \{\
        textOutput_en.textContent += brailleMap_en[brailleString_en];\
    \} else \{\
        textOutput_en.textContent += '[Invalid]';\
    \}\
  \
  //Chinese\
const brailleMap_cn = \{\
        '110000': 'b', '111100': 'p', '101100': 'm', '110100': 'f',\
        '100110': 'd', '011110': 't', '101110': 'n', '111000': 'l',\
        '110110': '(g/j)', '101000': '(k/q)', '110010': '(h/x)', '001100': 'zh',\
        '111110': 'ch', '100011': 'sh', '010110': 'r', '101011': 'z',\
        '100100': 'c', '011100': 's', '100000': '[\uc0\u31532 \u19968 \u22768 ]', '010000': '[\u31532 \u20108 \u22768 ]',\
        '001000': '[\uc0\u31532 \u19977 \u22768 ]', '011000': '[\u31532 \u22235 \u22768 ]', '111010': 'er', '001010': 'a',\
        '010001': '(e/o)', '010101': 'ai', '011101': 'ei', '011010': 'ao',\
        '111011': 'ou', '111001': 'an', '001011': 'en', '011001': 'ang',\
        '001111': 'eng', '010100': 'i', '110101': 'ia', '100010': 'ie','001110':'iao','110011':'iu','100101':'ian','110001':'in','101101':'iang','100001':'ing','101001':'u','111111':'ua','101010':'uo','101111':'uai','010111':'ui','110111':'uan','010010':'un','011011':'uang','010011':'ong','001101':'v','011111':'ve','111101':'van','000111':'vn','100111':'iong'\
    \};\
\
    const brailleString_cn = brailleDots.join('');\
    const textOutput_cn = document.getElementById('text-output-cn');\
\
    if (brailleMap_cn[brailleString_cn]) \{\
        textOutput_cn.textContent += brailleMap_cn[brailleString_cn];\
    \} else \{\
        textOutput_cn.textContent += '[Invalid]';\
    \}\
  //clear dots\
    brailleDots = [0, 0, 0, 0, 0, 0];\
    updateDotStyles();\
\}\
\
function convertToBraille() \{\
    const inputText = document.getElementById('input-text').value;\
    const brailleOutput = document.getElementById('braille-output');\
    const brailleMap = \{\
        'a': '\uc0\u10241 ', 'b': '\u10243 ', 'c': '\u10249 ', 'd': '\u10265 ', 'e': '\u10257 ', 'f': '\u10251 ', 'g': '\u10267 ', 'h': '\u10259 ',\
        'i': '\uc0\u10250 ', 'j': '\u10266 ', 'k': '\u10245 ', 'l': '\u10247 ', 'm': '\u10253 ', 'n': '\u10269 ', 'o': '\u10261 ', 'p': '\u10255 ',\
        'q': '\uc0\u10271 ', 'r': '\u10263 ', 's': '\u10254 ', 't': '\u10270 ', 'u': '\u10277 ', 'v': '\u10279 ', 'w': '\u10298 ', 'x': '\u10285 ',\
        'y': '\uc0\u10301 ', 'z': '\u10293 ', '1': '\u10241 ', '2': '\u10243 ', '3': '\u10249 ', '4': '\u10265 ', '5': '\u10257 ',\
        '6': '\uc0\u10251 ', '7': '\u10267 ', '8': '\u10259 ', '9': '\u10250 ', '0': '\u10266 ', ' ': '\u10240 ',\
     '!': '\uc0\u10286 ', '\\"': '\u10256 \u10242 ', '#': '\u10300 \u10290 ', '%': '\u10256 \u10294 ', '&': '\u10256 \u10278 ', '\\'': '\u10244 '\
     , '(': '\uc0\u10256 \u10275 ', ')': '\u10256 \u10268 ', '*': '\u10256 \u10260 ', '+': '\u10300 \u10262 ', ',': '\u10242 ', '-': '\u10276 ', '.': '\u10290 ', \
    '/': '\uc0\u10278 ', ':': '\u10258 ', ';': '\u10246 ', '<': '\u10288 ', '=': '\u10276 ', '>': '\u10246 ', '?': '\u10274 ', \
    '@': '\uc0\u10268 ', '[': '\u10282 ', '\\\\': '\u10291 ', ']': '\u10299 ', '^': '\u10264 \u10242 ', '_': '\u10276 \u10242 ', \
    '`': '\uc0\u10256 \u10278 ',  '\{': '\u10282 ', '|': '\u10291 ', '\}': '\u10299 ', '~': '\u10288 '\
      \
    \};\
    let brailleText = '';\
    let isNumber = false;\
\
    for (let i = 0; i < inputText.length; i++) \{\
        const char = inputText[i].toLowerCase();\
        if (char >= '0' && char <= '9') \{\
            if (!isNumber) \{\
                brailleText += '\uc0\u10300 ' + brailleMap[char];\
                isNumber = true;\
            \}else\{\
              brailleText += brailleMap[char];\
            \}\
        \} else \{\
            isNumber = false;\
            brailleText += brailleMap[char] + '';\
        \}\
        brailleText += ''; \
      \
    \}\
\
    brailleOutput.textContent = brailleText.trim();\
\}\
function clearAll() \{\
    document.getElementById('text-output-en').textContent = '';\
    document.getElementById('text-output-cn').textContent = '';\
   // Reset the Braille dots\
    brailleDots = [0, 0, 0, 0, 0, 0];\
    updateDotStyles();\
\}\
function space() \{\
    document.getElementById('text-output-en').textContent += ' ';\
    document.getElementById('text-output-cn').textContent += ' ';\
\
\}\
\
}