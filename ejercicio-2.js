// Sumar valores de una lista

// Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0

let sumaLista = (lista) =>{
    let sumador = 0;
    for(let i = 0; i < lista.length; i++){
      sumador += lista[i];
    }
    return sumador;
}

console.log(sumaLista([1, 5.2, 4, 0, -1]));
console.log(sumaLista([]));
console.log(sumaLista([-2.398]));