// Combinar dos matrices ordenadas en una

// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

let unirMatriz = (l1,l2)=>{
    let listaResultante = [];
    let lista1 = [];
    let lista2 = [];
   for(let i = 0; i < l1.length; i++){
    lista1.push(l1[i]);
      for(let j = 0; j < l2.length; j++){
        lista2.push(l2[j]);
      }
    
  }
   return listaResultante.push(lista1) ;

}

console.log(unirMatriz([1,2,3,4],[5,6,7,8]));