// Ordenar lista de numeros

// Crea una función llamada ordenarDesc (puede ser normal o función flecha) que reciba un arreglo de números como argumento y que retorne la lista ordenada de forma descendente (es decir, de mayor a menor)
let ordenarDesc = (lista)=>{
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista.length ; j++){
            if(lista[j] < lista[j + 1]){
                const temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    
    return lista;
}
console.log(ordenarDesc( [ 34, 7, 9, 11, 77, 23, 2 ]));
console.log(ordenarDesc([1,2,3,4,5,6,7,8,9,10]));
console.log(ordenarDesc([5,4,8,1,9,20,70,4,3,6,80]));