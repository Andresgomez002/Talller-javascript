// Sumar dos listas de igual longitud

// Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.
let sumaDeDosListas = (lista1, lista2)=>{
    let newLista = [];
    let suma = 0;
   for(let i = 0; i < lista1.length; i++){
    let save1 = lista1[i];
      for(let j = 0; j < lista2.length; j++){
        let save2 = lista2[j];
          if(i===j){
           suma = save1 + save2;
           newLista.push(suma)
          }
      }
   }
   return newLista;
}
console.log(sumaDeDosListas([1,2,3,4],[1,2,3,4]));
console.log(sumaDeDosListas([2,5,6,8],[2,4,6,8]));
console.log(sumaDeDosListas([3,5,7,-3,9,2],[5,-4,7,3,5,1]));