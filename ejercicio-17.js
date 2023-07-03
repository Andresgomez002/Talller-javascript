// Promedio de mayores de edad

// A partir del ejercicio anterior. Escribe una función llamada promedioMayoresDeEdad que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad.

// Nota: No olvide usar console.log() para mostrar los resultados retornados

let mayoresDeEdad = (objeto)=>{
    let sumador = 0;
    let contador = 0;
    let promedio = 0;
 for(let i = 0; i < objeto.length; i++){
    if(objeto[i].edad >= 18){
      sumador+=objeto[i].edad;
      contador++;
      promedio = sumador/contador;
    }
 }
 return promedio;
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