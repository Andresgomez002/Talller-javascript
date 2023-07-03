// ¿Par o impar?

// Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

// Dé su respuesta como una cadena que coincida con "impar" o "par".

// Si la matriz de entrada está vacía, considérela como: [0] (matriz con cero).
let parImpar = (lista)=>{
    let suma = 0;
 for(let i = 0; i < lista.length; i++){
    suma+=lista[i];
 }
 if(suma % 2 == 0){
    return 'par';
   }else{
      return 'impar';
   }
}
console.log(parImpar([0]));
console.log(parImpar([1,2,3,4]));
console.log(parImpar([ 0, 1, 4 ]));
console.log(parImpar([ 0, -1, -5 ]));