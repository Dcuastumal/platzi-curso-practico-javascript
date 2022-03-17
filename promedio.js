const lista1 = [
    100, 
    200, 
    300,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length


//Function lo podemos usar para que el usuario digite los valores que quiera

function calculaMediaAritmetica(Lista) {
//    let sumaLista = 0;
//    for (let i = 0; i < Lista.length; i++) {
//        sumaLista = sumaLista1 + Lista[i];
//    }
    
    const sumaLista = Lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / Lista.length;

    return promedioLista;
};