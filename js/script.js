
const hexadecimal = document.getElementById("hex");
const binary = document.getElementById("bin");
const octal = document.getElementById("oct");



function fun(value) {
  toBin(value);

};


var bin = '';
function toBin(valor){
  bin += valor % 2;

  if (valor / 2 != 0 && valor / 2 != 1) {
    toBin(parseInt(valor/2 ,0));
    
  }else {
    var result = valor / 2;
    result += bin.split('').reverse().join('');
    binary.value = result;
    bin = '';

  }
}

toBin(16);