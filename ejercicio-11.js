// Impares

// Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.
let obtenerImpares = (lista)=>{
    let impares = [];
for(let i = 0; i < lista.length; i++){
    let impar = lista[i]
    if(impar % 2 !== 0 ){
      impares.push(impar)
    }
}
return impares;
}
console.log( obtenerImpares( [ 1, 2, 3, 4, 5] ) );
console.log( obtenerImpares( [ 64, 35, 27 ] ) );
console.log( obtenerImpares( [ 64, 32, 27, 3, 5, 16, 9] ) );