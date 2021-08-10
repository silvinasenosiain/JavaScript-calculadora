function init(){

  var pantalla = document.getElementById('display');
  var opActual = "";
  var num;
  var operacion = undefined;
  var opAnterior = '';
  var opActual = '';
  var op = "";
  var total='';
  var punto = false;

/*var uno = document.getElementById("1").value;
alert(uno);*/
document.getElementById('1').addEventListener('click',function(event){
  uno = 1;
  agregarNumero(uno);
})

document.getElementById('2').addEventListener('click',function(event){
  dos = 2;
  agregarNumero(dos);
})

document.getElementById('3').addEventListener('click',function(event){
  tres = 3;
  agregarNumero(tres);
})

document.getElementById('4').addEventListener('click',function(event){
  cuatro = 4;
  agregarNumero(cuatro);
})
document.getElementById('5').addEventListener('click',function(event){
  cinco = 5;
  agregarNumero(cinco);
})
document.getElementById('6').addEventListener('click',function(event){
  seis = 6;
  agregarNumero(seis);
})
document.getElementById('7').addEventListener('click',function(event){
  siete = 7;
  agregarNumero(siete);
})
document.getElementById('8').addEventListener('click',function(event){
  ocho = 8;
  agregarNumero(ocho);
})
document.getElementById('9').addEventListener('click',function(event){
  nueve = 9;
  agregarNumero(nueve);
})
document.getElementById('0').addEventListener('click',function(event){
  cero = 0;
  agregarNumero(cero);
})

document.getElementById('punto').addEventListener('click',function(event){
  pto = ".";
  if (punto == false){
    punto = true;
    agregarNumero(pto);
  } else {
    return
  }
})
document.getElementById('mas').addEventListener('click',function(event){
  op = "+";
  pantalla.innerText = " ";
selecOper(op);
})

document.getElementById('menos').addEventListener('click',function(event){
  op = "-";
  pantalla.innerText = " ";
selecOper(op);
})

document.getElementById('por').addEventListener('click',function(event){
  op = "*";
  pantalla.innerText = " ";
selecOper(op);
})

document.getElementById('dividido').addEventListener('click',function(event){
  op = "/";
  pantalla.innerText = " ";
selecOper(op);
})

document.getElementById('igual').addEventListener('click',function(event){
  op = "=";
selecOper(op);
})

document.getElementById('on').addEventListener('click',function(event){
  pantalla.innerText = 0;
  opActual='';
  opAnterior= '';
  operacion = undefined;
  punto = false;
})


function agregarNumero(num){

  if(opActual.length == 8){
    return;
  }else if (opActual=='' && num == 0){
    return;
  } else if (opActual.length == 0 && num == "."){
    opActual = opActual.toString() +  0 + '.';
    pantalla.innerText = opActual;
    punto = true;
  } else {
      opActual = opActual.toString() + num;
      pantalla.innerText = opActual;
    }
  }


function selecOper(op){
  if (opActual === '') return;
  if (opActual !== ''){
    calcular();
  }
  operacion = op.toString();
  opAnterior = opActual;
  opActual = '';
  punto = false;
}

function calcular(){
  var calculo;
  const anterior = parseFloat(opAnterior);
  const actual = parseFloat(opActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "*":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    case "=":
      total = calculo;
      break;
  }
  opActual = calculo;
  console.log(opActual);
  if(opActual.toString().length > 9){
    pantalla.innerText = opActual.toFixed(8);
  } else {
    pantalla.innerText = opActual;
  }
  operacion = undefined;
  opAnterior = '';
  punto = false;
}

function clear(){
  opActual='';
  opAnterior= '';
  operacion = undefined;
}

}
