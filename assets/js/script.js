//Conociendo el ciclo For
function saludar(){
    var nombre=document.getElementById("nombre").value;
 var saludo="Hola";
 for(var i=1;i<=3;i++){//i++ --> significa que el i se va incrementar en 1
     var mensaje=`${saludo} ${nombre} ${i}`;
     alert(mensaje);
 } 
 }
 
 function saludar1(){
     var nombre=document.getElementById("nombre").value;
     var mensaje="";
     var saludo=["Buenos días", "Buenas tardes","Buenas noches"];
     for(var i=0;i<saludo.length;i++){//i++ --> significa que el i se va incrementar en 1
     mensaje += `${saludo[i]} ${nombre} <br>`;
     document.getElementById("resultado").innerHTML=mensaje;
     //alert(mensaje);
     }  
 }
 function bucle2(){
     let number=0;
     while(number<=5){
         console.log(number);
         number++;  //number=number+1 es un incremento en 1
     }
 }
 function pares(){
     let numero=2;
     while(numero<=100){
         document.getElementById("resultado").innerHTML+=`${numero} - `
         numero=numero+2;
     }
 }
 function impares(){
     let numero=1;
     while(numero<=100){
         document.getElementById("resultado").innerHTML+=`${numero} - `
         numero=numero+2;
     }
 }
 function numeros(){
     let numero=1;
     while(numero<=12){
         document.getElementById("resultado").innerHTML+=`${numero} - `
         numero++;
     }
 }

 //Ejercicio 1: Función que nos halle el area del circulo
 //Declaramos la funcion
 function areaCirculo(r){
    //pi*(r**2)
    const pi=3.14;
    area=pi*(r**2)
    return area;
 }
 //let radio =prompt('Ingresa el radio');
 //let areaC = areaCirculo(radio);
 //console.log(areaC);
 //alert(areaC);
 //document.getElementById("resultado").innerHTML=areaC;

 function notaEstudiante(nota){
   //Definiendo nota
    if(nota<=10){
        alert("Mal, estudia más, has reprobado!");
    }else if(nota>10){
        alert("Te felicito, aprobaste!");
    }
}
let nota= prompt('Ingrese su nota: ');
notaEstudiante(nota);

 //let nota= prompt('Ingrese su nota: ');
 //if (nota<=10){
    //alert("Estudia más, has reprobado")
 //}else if(nota>10){
    //alert("Muy bien, aprobaste!");
 //}
