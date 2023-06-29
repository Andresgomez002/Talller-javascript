// Contar por X

// Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.

// Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

// Devuelve los resultados como una lista.

let contarPorx = (x,n)=>{
    let lista = [];
for(let i = 1; i <= n; i++){
        lista.push(x*i);
}
return lista;
}
console.log(contarPorx(1,10));
console.log(contarPorx(2,5));
console.log(contarPorx(3,10));
