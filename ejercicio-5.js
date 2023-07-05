// Combinar dos matrices ordenadas en una

// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

let unirMatriz = (l1,l2)=>{
  const listaCombinada = [...l1, ...l2]; 
  for(let i = 0; i < listaCombinada.length; i++){
    for(let j = 0; j < listaCombinada.length ; j++){
        if(listaCombinada[j] > listaCombinada[j + 1]){
            const temp = listaCombinada[j];
            listaCombinada[j] = listaCombinada[j + 1];
            listaCombinada[j + 1] = temp;
        }
    }
}
return listaCombinada;

}

console.log(unirMatriz([1, 3, 5, 7, 9],[10, 8, 6, 4, 2]));
console.log(unirMatriz([1, 2, 3, 4, 5],[6, 7, 8, 9, 10] ));
console.log(unirMatriz([1, 3, 5, 7, 9, 11, 12],[2, 4, 8, 10, 20] ));