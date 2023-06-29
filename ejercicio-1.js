// Valor: 0.5 - ¿Va a sobrevivir?

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva true si es así, de lo contrario false :)
function matarDragones(numeroDragones) {
    var balasNecesarias = numeroDragones * 2; 
    var heroe = 3;
  
    if (heroe >= balasNecesarias) {
        console.log('Has ganado');
      return true;
    } else {
        console.log('Has perdido');
      return false;
    }
  }
  

  console.log(matarDragones(1));