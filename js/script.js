const hexadecimal = document.getElementById("hex");
const binary = document.getElementById("bin");
const octal = document.getElementById("oct");
const decimal = document.getElementById("dec");

var aux = 0;
function funDec(value) {
  decToBin(value);
  decToHex(value);
  decToOct(value);
};

function funBin(value) {
  toHex(value);
  aux = toOct(value);
  toDec(aux);
};

function funHex(value) {
  toHex(value);
  toOct(value);
  toBin(value);
};

function funOct(value) {
  aux = toDec(value);
  toHex(value);
  toOct(value);
  toBin(value);
};

//DEC TO BINARY FUNCTION
var bin = '';
function decToBin(valor){
  bin += valor % 2;

  if ((valor / 2) > 1) {
    decToBin(parseInt(valor/2 ,0));
    
  }else {
    var result = '';
    if (parseInt(valor/2 ,0) > 0){
      result = parseInt(valor/2 ,0);
    }

    result += bin.split('').reverse().join('');
    binary.value = result;
    bin = '';
  }
}

//DEC TO HEXADECIMAL FUNCTION
var hex = '';
function decToHex(valor){

  switch((valor % 16)){
    case 10:
      hex += "A";
      break;
    case 11:
      hex += "B";
      break;
    case 12:
      hex += "C";
      break;
    case 13:
      hex += "D";
      break;
    case 14:
      hex += "E";
      break;
    case 15:
      hex += "F";
      break;
    default:
      hex += valor % 16;
      break;
  }

  if ((valor/16) > 15) {
    decToHex(parseInt(valor/16 ,0));
    
  }else {
    var result = '';
    if (parseInt(valor/16 ,0) > 0){
      result = parseInt(valor/16 ,0);
    }
    
    result += hex.split('').reverse().join('');
    hexadecimal.value = result;
    hex = '';
  }
}

//DEC TO OCTAL FUNCTION
var oct = '';
function decToOct(valor){
  oct += valor % 8;

  if ((valor/8) > 7) {
    decToOct(parseInt(valor/8 ,0));
    
  }else {
    var result = '';
    if (parseInt(valor/8 ,0) > 0){
      result = parseInt(valor/8 ,0);
    }

    result += oct.split('').reverse().join('');
    octal.value = result;
    oct = '';
  }
}

// OCT TO DEC FUNCTION

function octToDec(value){
  var num = value.toString().length;
  var calc = 0;

  for (i = 0; i < num; i++){
    var str = Number(value.toString()[i]);
    calc += (str) * Math.pow(8,num-i-1);
  }
  decimal.value = calc;
  return calc;
}

// HEX TO DEC FUNCTION

function hexToDec(value){
  var num = value.toString().length;
  var calc = 0;
  var i = 0;
  while(num != 0){
    var text = value[i]
    text = toString(text).toUpperCase().replace("A","10");
    text = toString(text).toUpperCase().replace("B","11");
    text = toString(text).toUpperCase().replace("C","12");
    text = toString(text).toUpperCase().replace("D","13");
    text = toString(text).toUpperCase().replace("E","14");
    text = toString(text).toUpperCase().replace("F","15");
    calc += (text) * (8^num);
    i++;
    num--;
  }
  console.log(calc);
}

hexToDec('F1')