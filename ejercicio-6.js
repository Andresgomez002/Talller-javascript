// ¿Qué tan bueno eres realmente?*

// Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

// Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

// ¡Devuelve True si estás mejor, de lo contrario False!

// Nota: Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!

let promedioMayor = (miNota,lista) =>{
    let suma = 0;
    let promedio = 0;
    for(let i = 0; i < lista.length; i++){
        suma+=lista[i];
    }
    promedio = (suma + miNota ) / (lista.length + 1);
    if(miNota > promedio){
      return true;
    }
    else{
        return false;
    }
}
console.log(promedioMayor(4, [4,4,5,5,5]));
console.log(promedioMayor((4,5), [4,4,2,1,5]));
console.log(promedioMayor(4, [1,4,5,5,1]));