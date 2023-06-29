// Dibuja

// Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra o a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.
let dibujo = (letra)=>{
  for(let i = 0;  i < 10; i++){
    let fila = '';
      for(let j = 0; j < 10; j++){
        if( (i + j) % 2 == 0 ){
          fila += letra;    
        }
      }
      console.log(fila);
  }
}
console.log(dibujo('o'));