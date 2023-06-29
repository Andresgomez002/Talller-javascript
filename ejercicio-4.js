// Finalice la función uefaEuro2023()
let uefaEuro2023 = (equipos,goles)=>{
 for(let i = 0; i < equipos.length; i++){
    for(let j = 0; j < goles.length; j++){
        if( goles[0] > goles[1]){
          return `En el partido ${equipos[0]} - ${equipos[1]}, gano ${equipos[0]}`;
        }
        else if(goles[0] < goles[1]){
            return `En el partido ${equipos[0]} - ${equipos[1]}, gano ${equipos[1]}`;
        }
        else{
            return `En el partido ${equipos[0]} - ${equipos[1]}, los equipos empataron`;
        }
    }
 }
}

console.log(uefaEuro2023(['alemania','ucrania'],[2,1]));
console.log(uefaEuro2023(['belgica','italia'],[0,2]));
console.log(uefaEuro2023(['portugal','iceland'],[1,1]));
