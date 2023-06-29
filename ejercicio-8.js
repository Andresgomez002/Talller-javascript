// Productos Baratos

// Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:
let productosBaratos = (listaObjetc)=>{
    let listaNombres = [];
    for(let i = 0; i < listaObjetc.length; i++){
        let producto = listaObjetc[i];
        if(producto.precio >=5 && producto.precio <=10){
            listaNombres.push(producto.nombre)
         }
    }
    
    return listaNombres;
}
console.log(productosBaratos( productos = [
    { nombre: "Producto 1", precio: 3 },
    { nombre: "Producto 2", precio: 8 },
    { nombre: "Producto 3", precio: 12 },
    { nombre: "Producto 4", precio: 6 },
    { nombre: "Producto 5", precio: 15 },
  ]));