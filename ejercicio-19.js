// Unos y ceros

// Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero.

// Por ejemplo: [ 0, 0, 0, 1 ] se trata como 0001, que es la representación binaria de 1.
 
let binariosAEnteros = (lista)=>{
    let entero = 0;
    const longitud = lista.length;
    for (let i = 0; i < longitud; i++){
    const save = lista[i];
    const potencia = longitud - 1 - i;
    entero += save * (2 ** potencia);
  }
  return entero;
}
console.log(binariosAEnteros([ 0, 0, 0, 1 ]));
console.log(binariosAEnteros([ 0, 0, 1, 0 ]));
console.log(binariosAEnteros([ 0, 1, 0, 1 ]));
console.log(binariosAEnteros([ 1, 0, 0, 1 ]));
console.log(binariosAEnteros([ 0, 0, 1, 0 ]));
console.log(binariosAEnteros([ 0, 1, 1, 0 ]));
console.log(binariosAEnteros([ 1, 1, 1, 1 ]));
console.log(binariosAEnteros([ 1, 0, 1, 1 ]));