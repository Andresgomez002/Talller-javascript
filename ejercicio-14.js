// El mayor de N numero de argumentos

// Modifica el ejercicio anterior para que la función max no reciba un arreglo sino un número indeterminado de argumentos.
const max = (...lista)=>{
    let mayor = lista[0];
   for(let i = 0; i < lista.length; i++){
     if(mayor < lista[i]){
       mayor = lista[i]
     }
   }
   return mayor;
}
console.log(max(1,2,3,4,5));
console.log(max(1,2,9,4,5));
console.log(max(1,20,3,4,5));