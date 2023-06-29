// Acelerar/Frenar el Auto

// Crea un objeto explicito en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar.

// Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.

// Nota: Utiliza métodos concisos. No olvide usar console.log() para mostrar los resultados retornados por la función auto.velocidad:

let auto = {
    velocidad: 0,
    acelerar(){
        this.velocidad += 1;
    },
    frenar(){
        if(this.velocidad > 0){
            this.velocidad -= 1;
        }
        else{
            this.velocidad = 0;
        }
        
    }
}
console.log( auto.velocidad ); // 0
auto.acelerar()
console.log( auto.velocidad ); // 1
auto.frenar()
console.log( auto.velocidad ); // 0
auto.frenar()
console.log( auto.velocidad ); // 0
auto.acelerar()
console.log( auto.velocidad ); // 1
auto.acelerar()
console.log( auto.velocidad ); // 2