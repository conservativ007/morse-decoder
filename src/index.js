const MORSE_TABLE = {
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
    'space': ' ',
};

 function decode(expr) {
  // делаем нужный массив с массивами :)
  let arrNumbers = getArrNumbers(expr);

    // убираем нули
  let correctArrNumbers = getCorrectArrNumbers(arrNumbers);

  // переводим в точки с тире
  let newArr = arrayTransform(correctArrNumbers);

  // переводим в человекочитаемые строки
  let str = '';

  for(let i of newArr){
    str += MORSE_TABLE[i];
  }


  return str;
}

function arrayTransform(correctArrNumbers){
  let newArr = [];

  for(let item of correctArrNumbers){
    for(let subItem of item){
      newArr.push(func(subItem));
    }
  }

  return newArr;
}


function func(subItem){
  let str = '';
  let str2 = '';


  for(let i = 0; i < subItem.length; i+=2){
    str = subItem[i] + subItem[i+1];
    if(str == 10){
      str2 += '.';
    }else if(str == 11){
      str2 += '-';
    }else if(str == '**'){
      str2 += 'space';
      break;
    }
    
  }

  return str2;
  
}


function getArrNumbers(expr){
  let str = '';
  let arr = [];

  for(let i of expr){
    str += i;

    if(str.length == 10){
      arr.push(str);
      str = '';
    }
  }
  return arr;
}

function getCorrectArrNumbers(arrNumbers){
  let arr = [];
  arrNumbers.forEach((item, index) => {
    // console.log(item);
    arr.push( deleteZero(item) );
  });
   return arr;
}

function deleteZero(str){
  let newArr = [];
  let newStr = '';

    for(let i = 0; i<str.length; i++){
      if(str[i] == '*')
      {
        newStr = str.slice(i);
        newArr.push(newStr);
        break;
      }

      else if(str[i] == 1)
      {
        newStr = str.slice(i);
        newArr.push(newStr);
        break;
      }
    }
    return newArr;
}


module.exports = {
    decode
}