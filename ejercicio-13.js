// El mayor de una lista

// Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

// Nota: No utilices el método Math.max de JavaScript.
const max = (lista)=>{
    let mayor = lista[0];
   for(let i = 0; i < lista.length; i++){
     if(mayor < lista[i]){
       mayor = lista[i]
     }
   }
   return mayor;
}
console.log(max([1,2,3,4,5]));
console.log(max([1,2,9,4,5]));
console.log(max([1,20,3,4,5]));