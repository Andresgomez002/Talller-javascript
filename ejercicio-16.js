// Mayores de edad

// Escribe una función llamada mayoresDeEdad que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad:
let mayoresDeEdad = (objeto)=>{
    let nombres = [];
 for(let i = 0; i < objeto.length; i++){
    if(objeto[i].edad >= 18){
     nombres.push(objeto[i].nombre)
    }
 }
 return nombres;
}

console.log(mayoresDeEdad([
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 13 },
    { nombre: "Luisa", edad: 32 },
    { nombre: "Juan", edad: 15 },
    { nombre: "Elisa", edad: 45 },
    { nombre: "Sofia", edad: 9 },
    { nombre: "Manuela", edad: 30 },
]));