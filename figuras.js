// Codigo del cuadrado
//console.group("Cuadrado")
//const ladoCuadrado =  5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado ()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
//console.groupEnd();

// Codigo del cuadrado
//console.group("Triangulo")
//const ladoTriangulo1 =  6;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm");

//const ladoTriangulo2 =  6;
//console.log("Los lados del triangulo miden: " + ladoTriangulo2 + "cm");

//const baseTriangulo =  4;
//console.log("La base del triangulo mide: " + baseTriangulo + "cm");

//const alturaTriangulo =  5.5;
//console.log("La altuira del triangulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(l1, l2, base) {
    return l1 + l2 + base;
}
//console.log("EL perimetro del triangulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura)  {
    return (base * altura)/2 ;
}
//console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");
//console.groupEnd();

// Codigo del Circulo
//console.group("Circulo");
//onst radioCirculo =  4;
//const diametroCirculo =  radioCirculo * 2;

const PI = Math.PI; // O math 
function diametroCirculo (radio) { 
    return radio * 2;
}

function perimetroCirculo  (radio) {
   const diametro = diametroCirculo(radio);
   return (diametro * PI);
}

function areaCirculo (radio) {
    return (radio* radio) * PI;
}
//console.log('El area del circulo es: ' + areaCirculo + "cm^2");



//console.groupEnd();

//Aqui interactuamos con el HTML


function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);
}

function isosceles  (lado1, lado2, ladob) {
    if (lado1 + lado2 + ladob == 180) {
        return ("Es isosceles") ;
    }
    else 
        return ("No es isosceles");
    
 }

 function altura  (l1, l2) {
    return ((Math.sqrt(l1 * l1) - (l2 * l2)/4)) 
 }

