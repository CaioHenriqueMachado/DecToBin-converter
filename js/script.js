
const hexadecimal = document.getElementById("hex");
const binary = document.getElementById("bin");
const octal = document.getElementById("oct");



function fun(value) {
  toBin(value);
  toHex(value);

};

var bin = '';
function toBin(valor){
  bin += valor % 2;

  if (valor / 2 != 0 && valor / 2 != 1) {
    toBin(parseInt(valor/2 ,0));
    
  }else {
    var result = parseInt(valor/2 ,0);
    result += bin.split('').reverse().join('');
    binary.value = result;
    bin = '';

  }
}

var hex = '';
function toHex(valor){
  console.log(valor);

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

  if (valor / 16 > 15) {
    toHex(parseInt(valor/16 ,0));
    
  }else {
    var result = '';
    if (parseInt(valor/16 ,0) > 0){
      result = parseInt(valor/16 ,0);
    }
    
    result += hex.split('').reverse().join('');
    console.log(result);
    hexadecimal.value = result;
    hex = '';
  }
}
