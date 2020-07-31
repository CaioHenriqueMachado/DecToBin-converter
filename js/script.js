
const hexadecimal = document.getElementById("hex");
const binary = document.getElementById("bin");
const octal = document.getElementById("oct");



function fun(value) {
  toBin(value);

};

// function toBin(value) {
//   var resul = value % 2;
//   var count = value;
//   while(rest != 1 || rest != 0){
//     count/= 2;
//   }
//   var binary = '';
//   var count = value;
//   count 
// }


var bin = '';
function binario (valor){
  bin += valor % 2;

  if (valor / 2 != 0 && valor / 2 != 1) {
    binario(parseInt(valor/2 ,0));
    
  }else {
    var resul = valor / 2;
    resul += bin.split('').reverse().join('');
    console.log(resul);
  }
}
